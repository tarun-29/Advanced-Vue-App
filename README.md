
<!-- App statistics -->
Website used = GTmetrix (Although we can use chrome development tools network mode to check the performance of our website (The image loading time, Bad request etc) but we will continue with this for easyness)

<!-- Initially -->

PageSpeed Score : - 50/100 (Avg speed is 70%)(It's Avg not too good not too bad)
YSlow Score : - B grade(80%)(Avg speed is 75%) (It's Fine)
Page Load Time 3.0s (Avg is 8.1s) and in chrome optimazation tool (3.3s)(It's Fine)
Total Page Size : 1.66MB(Avg size 8MB) (Fine)

From above information it's shown that all the things are pretty fine but the main thing Pagespeed is very bad so let's Optimize it. for this we have to do four main thing which affected my app.

1. Resize the image
2. Optimize the images
3. Avoid Bad request
4. And one things is compress all js and css file i didn't used webpack because now in vue in build mode it's almost optimize the app so i didn't include it in this app.


So let's optimize it now.

1. I didn't fetched any data from api because of this small json data i included them in the app itself otherwise it will take some asynchronus time to fetch data from api server and in free mode of hosting api it will also charge some speed charge so we are using it in free mode.
2. Avoid Bad request any thing which is connected to anchor tag or linked to some image link wheather it's in the same app itself or fetching it from url it will consume app time so remove all the bad request.
3. Resize all the images :- the all the logo which i am using in displaying team card stats are in the dimensions of 1000*1000(Approx) and the dimension in which we are showing it is in 100*100(Approx) so convert all the logo images in some certain dimension although it will affect us in clearity aspect but in small dimensions we can see it somewhat good quality.
4. Optimization of image:- this will achive by fullfilling above resizing it will reduce image size by reducing dimensions. (I Reduced size from 1.3MB to 600KB which will surely affect the page loading speed and Page spped score)

<!-- After Optimization -->
After applying all the optimization here is the results

1. Phase (Original Website)
Page Load time 3.3s
Page Speed Score 50%
Page Size 1.66MB

2. Phase (Image Size Reduction Maintain Resolution)(We can say all image are pretty clear)
Page Load Time 3s
Page Speed Score 62%
Total Page Size 1.31MB
Link : - ipldash.netlify.app

3. Phase (Image Scaling Resolution)(Images are not good)
Page Speed Score 96%
Page Load Time 2.2s
Page Total Size 813KB
Link : - https://atlanipl.netlify.app/

You can check optimization folder for results

I am putting all the images inside Github Repo you can check that out and hosting both Phase 2 and 3 version of website on netlify.app