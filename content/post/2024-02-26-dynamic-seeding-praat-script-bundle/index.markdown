---
title: Dynamic seeding formant extraction
author: Miao Zhang
date: '2024-02-26'
slug: dynamic-seeding-praat-script-bundle
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2024-02-26T09:42:58+01:00'
featured: no
draft: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
---
# 1. Dynamic seeding formant extracting script bundle

This script bundle incorporated the seeding method (Chen et al. 2019)[^1] and dynamic formant reference value settings to extract more accurate formants from vocalic segments. Three scripts are found in this bundle:

1. The formant extraction script that uses dynamic seeding to extract formants without step-wise optimization
2. The formant extraction script that uses dynamic seeding to extract formants and does step-wise optimization, iterating over a range of ceiling frequencies (manually set by the user).
3. The script that extracts spectral tilt measures such as H1-H2, H2-H4, etc.

Since my study investigates the formant transition in complex vocalic segments (e.g., diphthongs/triphthongs), the usual method of setting only one set of reference formant values and ignoring the formant excursions in vocalic segments is not ideal. Also, because there are different vocalic segments in my recordings (both monophthongs and diphthongs), manually setting formant reference values for each vowel and each speaker each time when doing the analysis is meticulous and arduous. Therefore, I decided to combine the seeding method and dynamic formant reference setting into one single Praat script that loops through all files in all subdirectories in a root folder, making formant extraction much faster and more accurate.

# 2. Prerequisite

All your recordings must be annotated with `.TextGrid` files. 

To run any of the scripts, at least two reference files must be prepared.

## 2.1. Reference files

To run the formant extraction script without optimization and the spectral tilt scripts, you must prepare the three reference `.csv` files as illustrated below.

1. A `.csv` file containing the `reference values (F1-F3)` for the vowels you will extract formants from in your recordings. The formant reference values should be set differently for both genders (and children, if there are any).

|Vowel | Gender | F1_1 | F2_1 | F3_1 | F1_2 | F2_2 | F3_2 | F1_3  | F2_3 | F3_3 |
|------|--------|------------|------------|------------|-----------|-----------|-----------|-----------|----------|----------|
| a    | m      | 0          | 0          | 0          | 500       | 1000      | 2950      | 0         | 0        | 0        |

This file should have exactly `2+9=11` columns: `Vowel`, `Gender`, and 9 other columns of `formant reference values`. Your formant reference file should specify reference F1-F3 values separately for the **initial, medial, and final 33%** of the vowel (3 formants for each tertile and 9 reference values for each vowel in total). For monophthongs, set the reference values of the initial and final reference values to 0. My script will find monophthongs in your labels and locate the medial reference values automatically, ignoring the initial and final sets of reference values. 

Ensure you have set reference values for all the vowel segments you want to extract formants from in your `.TextGrid` annotation. The scripts will read the formant reference file, find all vowels you listed therein, and only extract formants from segments with the same labels.

2. A `.csv` file that lists the `speaker_id` and their `gender`.

This file should have exactly 2 columns: `speaker_id` and `gender`. The `speaker_id` should use the same strings you use for the names of the folders to save recordings of different speakers. This means if your first speaker's recordings are in a folder called '**sp_1**', then in the speaker log `.csv` file, its id should also be '**sp_1**'.

Example:

| Speaker | Gender |
| --------| ------ |
| sp_1    | m      |

3. Finally, A `.csv` file that has `formant_ceiling` values and `number of formants` for different `genders` (usually F(emale) and M(ale), C(hildren) can be added by the user too if necessary) of speakers. The order of the columns has to be the same as shown in the example:
  
| Gender  |  Formant_ceiling      |  Number_of_formants |
| ------- | --------------------- | ------------------- |
| m       |  5000 (Praat default) |  5 (Praat default)  |

This file should contain exactly 3 columns: `gender`, `formant_ceiling` and `number_of_formants`. The formant ceiling and number of formants to track should differ according to gender. Usually, I set the ceiling to 4600Hz for females and 4000Hz for males (another option is 5500Hz for females and 4600 for males). The number of formants to track should also be different by gender as well. I usually set 5 for female speakers and 4 for male speakers.

If you use the script that does step-wise optimization, you don't need to prepare this file since iterates a range of ceiling frequencies to get the optimal formant values for each time point.

Note that **the strings used to code genders must be consistent in all three files**. For example, If you used capital letters **M**/**F** in one file, you should also use capital letters **M**/**F** in the other two. 

However, the specific names of the columns in the three files only matter if the order is correct. The script will automatically locate the columns by order instead of the column names. Therefore, the order of the columns has to be exactly the same as I have illustrated above.

# 3. How to use

The script allows you to specify another one or two tiers (shown as `Syllable tier number` and `Word tier number` in the form window) that may contain syllable and word information or other sort. If you don't want to extract additional information from the other tiers, simply set them to `0`.

Upon running the script, it will first ask you to choose the `speaker log` file, the `formant reference` file, and the `formant ceiling` file (the `formant ceiling` file is not needed for the formant optimization script). Then, it will ask you to choose `the folder` where you saved your recordings. Note that since the script loops through subdirectories in the folder and looks for the subfolder names as speaker ID, your recordings of each speaker should be saved in separate folders, and within such folders, there should be no other subfolders.

For example, if you have two speakers, the two speakers' recordings should be saved separately in two folders, `speaker_1` and `speaker_2`. The two folders should be put together in another folder, for example, `speaker`. When asked to choose the SOUND FILE folder, choose `speaker` instead of `speaker_1` or `speaker_2`.

# 4. The logic of the scripts

The script first reads in the three (or two) reference files as tables and then loops through all the sound and textgrid files in all the subdirectories.

The script will first identify the speaker by getting the name of the folder and then find the speaker's gender from the speaker log file. Then, it will use the gender information to locate (the formant ceiling) the number of formants to track and formant reference values.

During formant extraction, the script divides each labeled interval into several time points (shown in the form as `Number of chunks`). Then, it divides all the time points into three slices: the initial, medial, and final 33% of the vowel. Then, it will use different formant reference values in the three slices to track formants.

After up to 3 or 4 formants and the spectral moments are obtained, the results will be output to two log files.

## 4.1. The logic of step-wise formant optimization

The idea of step-wise optimization is inspired by Christopher Caringan's praat script: [ChristopherCarignan/formant-optimization](https://github.com/ChristopherCarignan/formant-optimization.git).

It first iterate from the lowest value of the ceiling frequency to the highest value with a step frequency (e.g., 50Hz or 100Hz) that can be set by the user, to track the formants. Then for each time point, it filters out undefined values and outliers that are 2 standard deviations away from the mean first. Then it takes the median value for each time point of each segment to be the final extracted formant values at the time point.

For example, if you set your ceiling frequency from 4500 to 5000 with a step of 100Hz, the scripts will iterate across 4500, 4600, 4700, 4800, 4900, and 5000 to get the formant values for the time point.

This process can take a rather long time to finish, depending on your range of iteration of ceiling frequencies (the wider the range, the longer the time), your step frequency (the smaller the step, the longer the time), and how many segments you have in your `.TextGrid` file. It could possibly take hours to run when you have lots of data.

# 5. What do you get

All scripts output two log files: `*_time.csv` and `*_context.csv`. One file logs the contextual information, the previous and subsequent segments around the target vowel, the label of the current syllable/word, and the syllable/word duration.

The other file will log in values for each data-extracting time point, such as F0-4, spectral tilt measures, and spectral moment measures.

The outputs of the contextual log file are the same: the current segment, the preceding and following segments in the `.TextGrid` file, the current label on the syllable/word tier, and the duration of the syllable/word labels.

**The outputs in the time-sensitive log file differ for the three scripts**.

## 5.1. Formant dynamic seeding script

It contains `F1-F4` values (If script was unable to obtain any formant values, the result is logged as `0`) from several equidistant intervals of each vowel as specified by the user in the form before running the script. This file will also log four spectral moments: `center of gravity`, `standard deviation`, `skewness` and `kurtosis`, in the final `*_time.csv` file.

The data will be saved in the long format in the second log file, that is, all data from each individual value tracking interval are saved in one row in the file.

## 5.2. Formant optimization script

This script only outputs `F1-3` without spectral moment measures in the `*_time.csv` file.

## 5.3. Spectral measure script

It logs corrected and uncorrected spectral tilt measures: H1-H2, H2-H4, H4-H2k, H2k-H5k, H1-A1, H1-A2, H1-A3, and F0-4. The user can specify when using this script whether they also want the individual amplitude values (H1, H2, etc.) to be logged.

# 6. Advantages

1. It's accurate. With the seeding method that sets reference values for different segments, the formant estimation is more accurate than using the default tracking references. The Praat default is F1: 550, F2: 1650, F3: 2750, F4: 3850, F5: 4950, which is only ideal for schwa-like central vowels. It is also accurate for getting formants from vowel sequences by setting different reference values across the course of a segment, as there are usually formant excursions during the production of vowel sequences. This is something that most scripts and applications (E.g., VoiceSauce) fail to do, as they do not allow you to specify reference values for different vowel segments altogether.
2. It's fast. With the reference files, and iteration through subfolders, the amount of time is much reduced than running scripts for each vowel and each speaker.
3. The spectral tilt measures are more accurate with more accurate formant values. Spectral tilt measures are only useful when the tracked formant values are accurate. Getting the accurate formant is also crucial to getting the accurate spectral tilt measures. Especially if you also do spectral tilt measure correction based on the frequency and bandwidth of individual formants.

---

# 7. Reference

[^1]: Chen, W. R., Whalen, D. H., & Shadle, C. H. (2019). F 0-induced formant measurement errors result in biased variabilities. The Journal of the Acoustical Society of America, 145(5), EL360-EL366.
