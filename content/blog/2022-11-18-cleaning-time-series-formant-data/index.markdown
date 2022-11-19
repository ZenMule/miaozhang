---
title: Cleaning time-series formant data
author: Miao Zhang
date: '2022-11-18'
slug: cleaning-time-series-formant-data
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2022-11-18T21:33:57-05:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
output:
  html_document:
    toc: true
    toc_float: true
    number_sections: true
---

<style type="text/css">
  body{
  font-size: 12pt;
}
</style>

## 1. Load the packages

First, we need to load the packages. In this tutorial, we will use the packages below.

``` r
# If you don't have the packages downloaded, uncomment the first below and install download them first.
#install.packages("tidyverse", "imputeTS", "mgcv", "pracma")

# If you have installed the packages, load them.
library(mgcv) # GAM
library(pracma) # Signal smoothing
library(npreg) # Spline smoothing
library(imputeTS) # Filling in NA values
library(tidyverse) # I tend to load tidyverse packages at last since it's used the most frequently and you don't want some of the functions are masked by other less important packages.
```

## 2. Read in the data set

I will use some data of Chinese diphthong formants from my dissertation. The data consist of several Mandarin Chinese native speakers producing monophthongs and diphthongs. Formant extraction was done by using my dynamic seeding script. 30 data points were extracted from each token of vowel. I will only show how to clean F1 data from female speakers in this tutorial.

``` r
(raw_chn <- read_csv("chn_frmt.csv") |>
  select(-Seg_num, -Syll, -Word, -F4, -F2, -F3, -COG, -sdev, -kurt, -skew, -t_m) |> # Drop columns that we don't need
  filter(t >= 2 & t <= 28 & Gender == "F") |> # In the beginning and the end of the vowel segment, the formant extraction tends to be innaccurate, so we drop the 
  mutate(t = (t-2)/26, # Change the time points to percentage) 
         Seg = factor(Seg, levels = c("i", "a", "u", "ai", "au", "ou")),
         Speaker = factor(Speaker),
         Gender = factor(Gender)))
```

    ## # A tibble: 37,962 × 6
    ##    File_name  Speaker Gender Seg        t    F1
    ##    <chr>      <fct>   <fct>  <fct>  <dbl> <dbl>
    ##  1 chn_1_b1_1 chn_1   F      a     0        536
    ##  2 chn_1_b1_1 chn_1   F      a     0.0385   703
    ##  3 chn_1_b1_1 chn_1   F      a     0.0769   689
    ##  4 chn_1_b1_1 chn_1   F      a     0.115    663
    ##  5 chn_1_b1_1 chn_1   F      a     0.154    668
    ##  6 chn_1_b1_1 chn_1   F      a     0.192    664
    ##  7 chn_1_b1_1 chn_1   F      a     0.231    670
    ##  8 chn_1_b1_1 chn_1   F      a     0.269    701
    ##  9 chn_1_b1_1 chn_1   F      a     0.308    702
    ## 10 chn_1_b1_1 chn_1   F      a     0.346    738
    ## # … with 37,952 more rows

## 3. Remove the measuring errors

There are values that aren’t even outliers but just errors in formant extraction (e.g., extremely high F1 values for high vowels of which F1 should be low). We need to take those values out first. Let’s plot the raw data to identify those errors.

``` r
ggplot(raw_chn, aes(t, F1)) + # x axis: time, y axis: F1
  geom_line(aes(group = File_name), alpha = 0.2) + # for each token of vowels, plot the line
  scale_y_continuous(n.breaks = 6) +
  facet_wrap(. ~ Seg) +
  theme_light() +
  labs(title = "Raw F1", y = "Hz") +
  theme(axis.text.x = element_blank(),
        axis.title.x = element_blank(),
        axis.ticks.x = element_blank())
```

<img src="{{< blogdown/postref >}}index_files/figure-html/raw f1-1.png" width="672" />

Another way to visually check the errors is to use histogram. But this is not recommended for plotting time-series data as it cannot display the temporal structure of the data (e.g., the formant excursions of vowel sequences).

``` r
ggplot(raw_chn, aes(F1)) +
  geom_histogram(aes(group = File_name)) +
  facet_wrap(. ~ Seg) +
  theme_light() +
  labs(title = "Raw F1", y = "Count") 
```

    ## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.

<img src="{{< blogdown/postref >}}index_files/figure-html/raw F1 hist-1.png" width="672" />

The abrupt bumps in the first figure are probably just errors of formant extraction (they are not even outliers). We can set formant ranges for different vowels to remove those errors.

``` r
# Create the filtering bars
(f1_b <- tibble(Seg = levels(raw_chn$Seg) |> 
                  fct_relevel("i", "a", "u", "ai", "au", "ou"),
               F1_upr = c(500, 1150, 550, 1050, 1000, 750),
               F1_lwr = c(230, 650, 240, 500, 490, 250)))
```

    ## # A tibble: 6 × 3
    ##   Seg   F1_upr F1_lwr
    ##   <fct>  <dbl>  <dbl>
    ## 1 i        500    230
    ## 2 a       1150    650
    ## 3 u        550    240
    ## 4 ai      1050    500
    ## 5 au      1000    490
    ## 6 ou       750    250

``` r
# Join this small dataset to the original raw data
(f_f1b <- left_join(raw_chn, f1_b, by = c("Seg"))) # Join the two datasets by matching the Seg column
```

    ## # A tibble: 37,962 × 8
    ##    File_name  Speaker Gender Seg        t    F1 F1_upr F1_lwr
    ##    <chr>      <fct>   <fct>  <fct>  <dbl> <dbl>  <dbl>  <dbl>
    ##  1 chn_1_b1_1 chn_1   F      a     0        536   1150    650
    ##  2 chn_1_b1_1 chn_1   F      a     0.0385   703   1150    650
    ##  3 chn_1_b1_1 chn_1   F      a     0.0769   689   1150    650
    ##  4 chn_1_b1_1 chn_1   F      a     0.115    663   1150    650
    ##  5 chn_1_b1_1 chn_1   F      a     0.154    668   1150    650
    ##  6 chn_1_b1_1 chn_1   F      a     0.192    664   1150    650
    ##  7 chn_1_b1_1 chn_1   F      a     0.231    670   1150    650
    ##  8 chn_1_b1_1 chn_1   F      a     0.269    701   1150    650
    ##  9 chn_1_b1_1 chn_1   F      a     0.308    702   1150    650
    ## 10 chn_1_b1_1 chn_1   F      a     0.346    738   1150    650
    ## # … with 37,952 more rows

We can check the filtering bars by visualization

``` r
ggplot(f_f1b, aes(t, F1)) + # x axis: time, y axis: F1
  geom_line(aes(group = File_name), alpha = 0.2) + # for each token of vowels, plot the line
  geom_hline(aes(yintercept = F1_upr), linetype = 1, linewidth=0.8, color = "Blue") +
  geom_hline(aes(yintercept = F1_lwr), linetype = 2, linewidth=0.8, color = "Blue") +
  scale_y_continuous(n.breaks = 6) +
  facet_wrap(. ~ Seg) +
  theme_light() +
  labs(title = "Raw F1 with filtering bars", y = "Hz") +
  theme(axis.text.x = element_blank(),
        axis.title.x = element_blank(),
        axis.ticks.x = element_blank())
```

<img src="{{< blogdown/postref >}}index_files/figure-html/Check bars-1.png" width="672" />

## 4. Remove the measuring errors

Now we can remove the errors.

``` r
f1_filt <- f_f1b |> 
  filter(F1 < F1_upr & F1 > F1_lwr)
nrow(f1_filt)
```

    ## [1] 36083

However, there is a problem with this approach. When dropping data by using `filter()`, if the row has a data that doesn’t meet the condition in any columns, the entire row is dropped. This might accidentally drop rows in which the data in other columns do not need to be dropped. For example, one row might have a F1 error, but its F2 value is fine. In such case, we only need to remove the F1 value but keep the F2. Henceforth we may end up losing a lot of data points using `filter()`. And in fact, we did. We lost about 1879\` rows of data.

So an alternative and better approach is just to set those errors with extreme formant values to NA by using `ifelse()` or `if_else()` function.

``` r
f1_nafilt <- f_f1b |> 
  mutate(F1 = ifelse(F1 < F1_upr & F1 > F1_lwr, F1, NA)) |>
  select(-F1_upr, -F1_lwr)
```

Now we were able to keep all rows in the original data (the data sets before and after removal both contain 37962 rows of data).

Then we can visualize the data again.

``` r
ggplot(f1_nafilt, aes(t, F1)) + # x axis: time, y axis: F1
  geom_line(aes(group = File_name), alpha = 0.2) + # for each token of vowels, plot the line
  scale_y_continuous(n.breaks = 6, limits = c(200,2200)) +
  facet_wrap(. ~ Seg) +
  theme_light() +
  labs(title = "Errors removed", y = "Hz") +
  theme(axis.text.x = element_blank(),
        axis.title.x = element_blank(),
        axis.ticks.x = element_blank())
```

<img src="{{< blogdown/postref >}}index_files/figure-html/no error-1.png" width="672" />

## 5. Remove data points that are 2 sds away from the mean

Although we don’t have extreme errors now, but the data still look very messy. So we can further filter out the data that are 2 standard deviations away from the mean in each time points for each vowel. This assumes that for each vowel on each time point, the data follow normal distribution. However, depending on how you want to analyze your own data, you may actually want to keep those data points that are 2 standard deviations away, or use 3 standard deviations instead of 2.

``` r
f1_clean <- f1_nafilt |> group_by(Seg, t) |> # Group the data by vowel segments and time
   mutate(F1 = ifelse(F1 > (mean(F1, na.rm = T) - 2*sd(F1, na.rm = T)) & 
                       F1 < (mean(F1, na.rm = T) + 2*sd(F1, na.rm = T)), F1, NA)) |>
   group_by(File_name)
```

``` r
# Let's visualize the filtered clean data
ggplot(f1_clean, aes(t, F1)) + # x axis: time, y axis: F1
  geom_line(aes(group = File_name), alpha = 0.2) + # for each token of vowels, plot the line
  scale_y_continuous(n.breaks = 6, limits = c(200,2200)) +
  facet_wrap(. ~ Seg) +
  theme_light() +
  labs(title = "Filtered F1", y = "Hz") +
  theme(axis.text.x = element_blank(),
        axis.title.x = element_blank(),
        axis.ticks.x = element_blank())
```

    ## Warning: Removed 1594 rows containing missing values (`geom_line()`).

<img src="{{< blogdown/postref >}}index_files/figure-html/visualize filtered data-1.png" width="672" />

The result looks much better.

However, you can see that R is telling us that it ignored 3352 rows of data that contain NA values. Also if a token has too many NAs, we probably should drop it from the data (for example, we probably don’t need a token of vowel that over 40% of the data points are just NAs). And for data that contains only a few NAs, we want to fill (interpolate) the NAs based on the distribution of the adjacent data points.

Consider that I have a data set with 5 data points: 1, 2, NA, 4, 5. Even though, the third data point is an NA, we can be rather sure that it should be 3 according to the distribution of the overall data set. However, if we had a data set with 5 data points: 1, NA, NA, NA, 7, then we are not sure what the three missing values would be. Therefore, we should keep the first data set and fill the NA value with three but drop the second data set.

Therefore, next we will first drop all the tokens that have too many NAs, and then interpolate all the NAs left in other tokens.

``` r
f1_no_na <- group_by(f1_clean, File_name) |> # Make sure each group has only one token of vowels, in my dataset there is only one vowel in each recording sound files, so I only need to group it by File_name
  mutate(naf1 = sum(is.na(F1))) |> # calculate the NAs in each token
  filter(naf1 <= 6) |> # keep all tokens that have no more than 6 NAs (just to make sure that there are at least 20 data points left in each token.)
  select(-naf1) |> # drop the naf1 column we just created 
  mutate(F1 = na_interpolation(F1, option = "stine")) # then use the na_interpolation() function from the package imputeTS to interpolate the NAs. The method is set to Stineman interpolation.
```

It looks we lost 168 (11.9%) tokens of vowels, which looks acceptable.

Let’s also check how many NAs there are. There should be no NAs in the filtered data set now.

``` r
sum(is.na(f1_no_na$F1))
```

    ## [1] 0

Visualize the interpolated data:

``` r
ggplot(f1_no_na, aes(t, F1)) + # x axis: time, y axis: F1
  geom_line(aes(group = File_name), alpha = 0.2) + # for each token of vowels, plot the line
  scale_y_continuous(n.breaks = 6, limits = c(200, 2200)) +
  facet_wrap(. ~ Seg) +
  theme_light() +
  labs(title = "NAs interpolated", y = "Hz") +
  theme(axis.text.x = element_blank(),
        axis.title.x = element_blank(),
        axis.ticks.x = element_blank())
```

<img src="{{< blogdown/postref >}}index_files/figure-html/visualize no na-1.png" width="672" />

## 6. Smoothing the data

However, this data is still messy containing lots of abrupt jumps of F1. We will need to smooth the data by using smoothing methods. There are several possible options: ss-anova, polynomial regression, generalized additive modeling, and lowess.

In the field of speech signal processing, it’s not uncommon to smooth the data multiple times. Therefore the approach that I’m using below is first smooth the data with triangular moving average smoothing twice, and then use statistical models to further smooth the data. I used, GAM, LOWESS, Polynomial regression, and Spline Smoothing.

``` r
f1_nest <- group_by(f1_no_na, File_name) |> nest()

for (i in (1:nrow(f1_nest))) {
  f1_pred_i <- f1_nest[i,] |> unnest(cols = c(data)) 
  
  f1_pred_i <- f1_pred_i |>
    mutate(smth_f1 = pracma::movavg(F1, n = 3, type = "t") |>
             pracma::movavg(n = 3, type = "t"), # we take 5 data points as the width of the smoothing angle, the method is set to "t", which represents "triangular". I also smoothed it twice.
           gam_f1 = predict(gam(smth_f1 ~ s(t, k = 5, bs = "cr"), 
                                data = f1_pred_i, method = "REML"),
                            f1_pred_i), # GAM
           lws_f1 = lowess(t, smth_f1, f = 2/3)$y, # LOWESS
           poly_f1 = predict(lm(smth_f1 ~ poly(t, 3), data = f1_pred_i), f1_pred_i), # #rd order polynomial regression
           ss_f1 = predict.ss(ss(t, F1, nknots = 3), t)$y # Spline smoothing
           )
  
  if (i == 1) {
    f1_pred <- f1_pred_i
  } else {
    f1_pred <- bind_rows(f1_pred, f1_pred_i)
  }
}
```

Then we can finally see the output of our data cleaning.

<img src="{{< blogdown/postref >}}index_files/figure-html/final visualization lowess-1.png" width="672" />

<img src="{{< blogdown/postref >}}index_files/figure-html/final visualization gam-1.png" width="672" />

<img src="{{< blogdown/postref >}}index_files/figure-html/final visualization poly-1.png" width="672" />

<img src="{{< blogdown/postref >}}index_files/figure-html/final visualization ss-1.png" width="672" />

The final result looks much improved than the raw data. Now we can plot the overall smoothing for the vowels.

<img src="{{< blogdown/postref >}}index_files/figure-html/overall average-1.png" width="672" />
