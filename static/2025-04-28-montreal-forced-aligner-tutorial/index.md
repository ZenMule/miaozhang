---
title: Montreal Forced Aligner Tutorial
author: "Miao Zhang\nDepartment of Computational Linguistics, University of Zurich"
date: '2025-04-28'
slug: MFA-tutorial
categories: []
tags: []
output:
  xaringan::moon_reader:
    lib_dir: libs
    nature:
      highlightStyle: github
      countIncrementalSlides: false
---


# About me

I am a linguist specializing in phonetics and phonology. I am primarily interested in any topics related to the **phonetics-phonology interface** and **phonetics-prosody interface**. I have worked on tone systems in Changsha Xiang (Sinitic), consonant-intrinsic F0 in Kansai Japanese (Japonic), voiceless nasals in Ikema (Ryukyuan). I am currently working on a project at UZH that uses large scale multilingual phonetics corpus ([VoxCommunis](https://huggingface.co/datasets/pacscilab/VoxCommunis)).

---

<!---class: center--->

# A workflow of acoustic phonetic research


1. Obtain the speech recordings (scripted or unscripted speech).

--

2. Annotate the speech data (manually, or automatically).

--

3. Extract acoustic measures (pitch, duration, formants, spectral tilts) using software for speech analysis (PRAAT)

--

4. Statistical analysis of the extracted measures (R, Python, Matlab, etc.).

--

Forced alignment is especially useful for step 2!

---

# Speech data annotation

- Given recordings of utterances, we would like to know where each individual sound starts and ends to perform further phonetic analysis.

<img src="annotation.jpg" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

The input:

![Sound](snd_only.png)

<div style="text-align: center;">
  <audio controls>
    <source src="ex_en.wav" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

---

The output:

![Sound](snd_aligned.png)

<div style="text-align: center;">
  <audio controls>
    <source src="ex_en.wav" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

---

# Why forced alignment?

- Manual annotation is not scalable to large speech corpora. 
  - Hand-annotate 10 minutes of recordings can easily cost more than 1 hour of work.

- Cross-annotator consistency may not be high.

- As scientists, we would like to spend more time and energy thinking about research rather than doing repetitive 'labor work' that may not be less prone to errors than algorithms.
  - Human errors are also often less *transparent* than computational errors.

<img src="save_time.jpg" width="45%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

# Before we start

## Be cautious!

Forced alignment is NOT a Swiss army knife!

- Depending on the quality and amount of the training data, the alignment might not always be 'good'.

- All machine/deep learning algorithms leak.

- Be aware of all the compromises/assumptions you have to make and live with a **good enough** outcome!

---

## Be cautious

Some cases of misuses of alignment tools which may lower the quality of your outcome:

- Using a model and dictionary trained for adult speech to align child speech.

- Using a model and dictionary for an accent or dialect that the model was not trained on. 
  - e.g., Using a model trained on American English to align British English.

- Using a model and dictionary to align speech that contains too many **unknown** words to the dictionary.

---

# Some other factors that can influence the quality of the alignment

- The quality of the pronunciation dictionary.

- The quality of the recording.

- The variability in the speakers, utterances, etc.

, etc.

_Know what your model is for and what kind of data you have!_

---

# There are many forced aligners

- [FAVE-align](https://github.com/JoFrhwld/FAVE) (and a more advanced version: [new-fave](https://forced-alignment-and-vowel-extraction.github.io/new-fave/))

- [DARLA](http://darla.dartmouth.edu/)

- [MAUS](https://www.bas.uni-muenchen.de/Bas/BasMAUS.html) (the online user interface: [WebMAUS](https://clarin.phonetik.uni-muenchen.de/BASWebServices/interface/WebMAUSGeneral))

- [CMU Sphinx](https://cmusphinx.github.io/)

, etc.

---

# Why Montreal Forced Alignment (MFA)?

- MFA allows you to train your own acoustic model with your own data.

- MFA contains grapheme-to-morpheme models as well.
 - Grapheme-to-morpheme (G2P) models are models that take the orthography as the input and output the pronunciation automatically.

That said, if you speech data is covered in the alignment tools in the previous slide, you can save the time training your own model and align your data directly.

- MFA website also contains lots of pretrained acoustic and G2P models.

But we will focus on using MFA from training your own model for your own dataset.

---

# How does MFA do this?

> "The Montreal Forced Aligner by default goes through four primary stages of training. The first pass of alignment uses <span style="color:red;">**monophone models**</span>, where each phone is modelled the same regardless of phonological context. The second pass uses <span style="color:red;">**triphone models**</span>, where context on either side of a phone is taken into account for acoustic models. The third pass performs <span style="color:red;">**LDA+MLLT**</span> to learn a transform of the features that makes each phone’s features maximally different. The final pass enhances the triphone model by taking into account <span style="color:red;">**speaker differences**</span>, and calculates a transformation of the mel frequency cepstrum coefficients (MFCC) features for each speaker."

<p style="text-align: right;">---From MFA Official website.</p>

---

# Installing MFA

MFA is installed through `conda-forge`. We will need to install [Anaconda](https://www.anaconda.com/) first.

Go to the website of Anaconda and download the one suitable to your OS (Windows, macOS, linux, etc). Installing instructions can be found [here](https://www.anaconda.com/docs/getting-started/anaconda/install#windows-installation). 


.center[![Anaconda3](Anaconda_Logo.png)]

---

# Installing MFA

When Anaconda installation is successful, open your terminal (on macOS), or power shell (on Windows).


``` bash
conda create -n aligner -c conda-forge montreal-forced-aligner
```

The `aligner` flowing `-n` will be the name of the environment you create for your MFA. It can be any strings: mfa, aligner3, etc.

When the installation succeeded, use the following code to activate the environment you just created.


``` bash
conda activate aligner
```

Again, the strings following `activate` here should be the environment name you specified in previous installing command.

---

# What to prepare?

There are several things you need to prepare:

- Speech **recordings** (`.wav`, `.mp3`, etc.) with corresponding sentence-level **transcripts** (`.TextGrid`).

--

- A **pronunciation dictionary** (that shows how words are pronounced in terms of IPA or other transcription systems, e.g., X-SAMPA, ARPABET, etc.)

--

- An **acoustic model** (that represents how audio signals relate to linguistic units like phonemes or words).

---

# Use case 1 (the most simple case)

1. Recordings &#10004;

2. Transcripts &#10004;

3. Dictionary &#10004;

4. Acoustic model &#10004;

You have all preparations ready. Time to align!

---

## Recordings and the transcripts

Each recording should have a corresponding `.TextGrid` file that logs down the transcript of each utterances.

![File preparation](prep_files.png)

The recordings should not be too long. It is not recommended that a single recording is more than 10 minute long. 

It is recommended that each recording contains one utterance.

---

## Download from MFA database

Since MFA already contains acoustic model and dictionary for English data, we will just download them and use directly.


``` bash
# Download the dictionary
mfa model download dictionary english_us_mfa

# Download the pretrained acoustic model
mfa model download acoustic english_mfa
```

---

## Format of the dictionary

The dictionary, in its simplest form, should be formatted as: 

`word w ɝ d`

on each line.

--

This format is called [CMU pronunciation dictionary](http://www.speech.cs.cmu.edu/cgi-bin/cmudict). The strings of the orthography (text-normalized) and the pronunciation of the word (phones separated by white spaces) should be tab-separated.

--

MFA dictionaries have a slightly different form that contains the probability distribution of different pronunciations of the same word.

---

## Running MFA to align

Before we actually start aligning, we need to do some sanity check first.

1. Make sure that every recording has an accompanying `.TextGrid` file.
2. Make sure that there aren't too many unknown words (<span style="color:red;">OOV words</span>, _Out-Of-Vocabulary_).


``` bash
# Corpus validation
mfa validate --ignore_acoustics --no_final_clean --clean CORPUS_DIRECTORY english_us_mfa
```

---

## If the previous step ran successfully

You should see something like this: 

<img src="validation.png" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

## MFA align

OK, since it says "There were no sound files missing transcriptions," we can proceed to align.


``` bash
mfa align --clean --final_clean CORPUS_DIRECTORY english_us_mfa english_mfa
          OUTPUT_DIRECTORY
```

Usually I just put the `OUTPUT_DIRECTORY` as an "output" folder in the `CORPUS_DIRECTORY`.

For example, if my `CORPUS_DIRECTORY` is `path/to/my/corpus`, then the `OUTPUT_DIRECTORY` should just be `path/to/my/corpus/output`.

To make sure that there is no path errors, it is recommended to use full path on your computer. A full path on macOS should start with <span style="color:red;">`~/`</span>, or <span style="color:red;">`C:\\`</span> (Or any other disks on your computer, such as <span style="color:red;">`D:\\`</span>).

---

## If the previous code ran successfully

You should now be able to see a new `output` folder in your corpus folder like this:

<img src="corpus_aligned.png" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

## The result

Now you should see the result I showed in the beginning: 

![Sound](snd_aligned.png)

<div style="text-align: center;">
  <audio controls>
    <source src="ex_en.wav" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

---

# Use case 2:

1. Recordings &#10004;

2. Transcripts

3. Dictionary &#10004;

4. Acoustic model &#10004;

I don't have transcripts ready.

---

## Create your transcripts

It is easy to create `.TextGrid` files in PRAAT.

<img src="open_from_praat.png" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

## Create your transcripts

<img src="to_tg.png" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

## Create your transcripts

<img src="create_tier.png" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

## Create your transcripts

You can use [PRAAT scripting](https://www.fon.hum.uva.nl/praat/manual/Scripting.html) to bulk create `.TextGrid` files if you have a list of the transcript and the correspondence between the transcripts and the recordings.

We will not have time to cover PRAAT scripting in this tutorial, which is another big topic that requires some time to get familiar with.

Once your `.TextGrid` files are ready, the rest is the same as in <span style="color: red">Use Case 1</span>.

---

# Use case 3

1. Recordings &#10004;

2. Transcripts &#10004;

3. Dictionary 

4. Acoustic model 

I don't have a dictionary yet.

---

## Create dictionary

If you obtained all the unique words in your corpus, you can create your own dictionary.

A CMU pronunciation dictionary usually look like this:

hello	h ə l oʊ  
world	w ɜːr l d  
computer	k ə m p j uː t ər  
science	s aɪ ə n s  
example	ɪ ɡ z æ m p ə l  
dictionary	d ɪ k ʃ ə n ɛ r i  
pronunciation	p r ə n ə n s i eɪ ʃ ə n  
generator	dʒ ɛ n ə r eɪ t ər  
switzerland	s w ɪ t s ər l æ n d  
zurich	z ʊ r ɪ k  

---

## Use G2P to generate pronunciation

If the word list is huge, use Grapheme-to-Morpheme (G2P) tools to generate pronunciations.

Some easy-to-use G2P tools:

- [Epitran](https://github.com/dmort27/epitran)
- [XPF](https://cohenpr-xpf.github.io/XPF/)
- [CharsiuG2P](https://github.com/lingjzhu/CharsiuG2P)

(We won't have time to cover how to use G2P in detail here.)

---

# Use Case 3

1. Recordings &#10004;

2. Transcripts &#10004;

3. Dictionary &#10004;

4. Acoustic model 

---

## The most important use

Train your custom acoustic model using MFA. 

If recordings, transcripts, and the dictionary are all ready, training your own model can be done in just <span style="color: red">one line</span> in MFA.


``` bash
mfa train [OPTIONS] CORPUS_DIRECTORY DICTIONARY_PATH OUTPUT_MODEL_PATH 
```

---

## An example: Upper Sorbian from Mozilla Common Voice

[Mozilla Common Voice](https://commonvoice.mozilla.org/) is an online crowd-sourced multilingual dataset for automatic speech recognition.

I downloaded the Upper Sorbian dataset for demonstration, since it is relatively small with 3 hours of validated recordings.

The time it takes to train a model depends on the total length of your recordings and the power of your computer.

Training a model on a dataset with approximately 2800 hours of recordings on my Mac (A3 chip with 36GB memory) takes more than 36 hours.

---

## Training


``` bash
mfa train --clean --final_clean /Users/miaozhang/Downloads/MFATutorial2021/hsb_v21/validated /Users/miaozhang/Downloads/MFATutorial2021/hsb_v21/hsb_xpf_lexicon21.txt /Users/miaozhang/Downloads/MFATutorial2021/hsb_v21/hsb_v21_mfa_model.zip
```

Just replace the `/Users/miaozhang/Downloads/MFATutorial2021/` with a directory on your own computer.

### If it ran successfully

You should see this in your terminal/shell window: 

<img src="start_training.png" width="80%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">

---

## When training is finished

You will find a `.zip` file: `hsb_v21_mfa_model.zip` in the folder.

Now you can run codes we already tried in Use Case 1 to align the data.

---

# The next step: acoustic analysis

We would like to use the corpus to perform more phonetic analysis, such extracting the F0, formants, duration, etc.

I created a very simple formant extraction script that you can use: `formant_simple.praat`

The script requires the directories of the <span style="color: red>recordings</span>, and the aligning <span style="color: red>output</span>. 

---

# When you have obtained the acoustic measures

You can do all sorts of analysis in R or Python...

---

class: center, middle

# Thanks for coming to the tutorial



