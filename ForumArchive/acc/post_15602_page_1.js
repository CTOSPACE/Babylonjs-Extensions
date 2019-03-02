[{"Owner":"gamestudiohx","Date":"2015-07-07T20:03:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just to let you all know that BabylonHx just got its website_dd_ _lt_a href_eq__qt_http_dd_//babylonhx.com/_qt_ rel_eq__qt_external nofollow_qt__gt_www.babylonhx.com_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Its more portable than ever and also closest to BabylonJS then ever too. I would say the compatibility is about 90%_co_ maybe a little more._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_New feature with the latest version of BabylonHx is generation of _qt_pure js_qt_ version of library_co_ which means that you should be_lt_/p_gt__lt_p_gt_able to simply replace original Babylon.js file with js file compiled with BabylonHx and everything should work the same._lt_/p_gt__lt_p_gt_JS version can be found here_dd_ _lt_a href_eq__qt_https_dd_//github.com/vujadin/BabylonHx/raw/master/bin_purejs/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/vujadin/BabylonHx/raw/master/bin_purejs/babylon.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve tried it with several examples from BabylonJS playground and it worked fine with most of them._lt_/p_gt__lt_p_gt_But this is very new feature and more work remains to be done._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ the site is online so if you_t_re interested take a look._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ if you_t_re willing to try android apps (which can be downloaded from site) I would be very_lt_/p_gt__lt_p_gt_grateful to know how it performed on your device (also what CPU/GPU your device have or simply your device model)._lt_/p_gt__lt_p_gt_You can find contact info on the website._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-07T21:34:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This project is truly impressive. I understand that Haxe is used by a large number of people_co_ and it_t_s great to see people are still pumping new blood into it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your examples are also impressive_co_ as is the first scene in the background. There_t_s obviously been a lot of work into it. Well done _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For your information_co_ I_t_ve tried an example in Windows binaries (the bump map one)_co_ and felt that the FPS was under 60. Have you been doing benchmark? How does BabylonHS performs on other platforms?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-07-07T21:37:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nice that you now have a site that shows the install_co_ instead of just a topic post.  I am just a little lost as what to do about my scene code though.  Are you expecting that almost everything is in a .babylon file? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I should mention that I do not use .babylon files.  I have written a variant of the Blender exporter_co_ Tower of Babel_co_ which generates inline JS modules source and or TS classes source.  It is multi-pass process_co_ so if this is really going to be fast_co_ adding a Haxe classes source pass is not out of the question.  Not switching to a .babylon_co_ since exporter allows you to pick a base class for each mesh.  This allows for OO development_co_ having either a hand written base class_co_ or hand written sub-class of the exported class.  Would my hand written classes need to be written in Haxe?  Also with code instead of .babylon data_co_ everything can be done synchronously.  No callbacks just to load a scene_co_ just_lt_/p_gt__lt_p_gt__lt_strong_gt_     _lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_var mesh _eq_ new MyMeshClass(scene)_lt_/span_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Speaking of fast_co_ is whatever this Haxe language is being compiled like c++_co_  or runtime interpreted?  Do not see how this would give me a performance edge over CocoonJS or XDK_co_ if it still be being interpreted.  Would only get extra platforms. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am also wondering about what BJS Features are supported.  I think lists like _t_supported_t__co_ _t_doable but different_t__co_ &amp_sm_ _t_not supported_t_ would be helpful.  Nobody wants to start down this path only to learn that say css buttons for forms or VirtualJoysticks will not work.  Since this can run on mobile devices_co_ do the Device Orientation Cameras work?  Are their equivalent things for Cordova to control real cameras_co_ for example?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-07-07T21:54:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_jahow - its very strange that windows binary felt slow... it should be really fast for everything as the Haxe code is compiled to C++ and then VisualC++ compiles that code to windows binary. can you try some other examples ? I_t_ve added BumpMap example today and win binary was compiled with Haxe 3.1.3 (the older version)_lt_/p_gt__lt_p_gt_I_t_ve never experienced any slowdown with windows binaries_co_ especially with simple scene like bumpmap._lt_/p_gt__lt_p_gt_Even on my lowend android device bumpmap example runs smoothly at 60FPS as well as most other examples that are not using some fancy effects (postprocessing...)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_JCPalmer - I haven_t_t looked at your Tower of Babel but if you_t_re generating TS classes then making it to generate Haxe code will be trivial. _lt_/p_gt__lt_p_gt_About speed_co_ yes - Haxe code is translated to C++ code for most targets (win. linux_co_ mac_co_ ios_co_ android...) so you get the best performance possible. I_t_m sure that .apk files from BabylonHx site will perform better then any example built with CocoonJS or XDK (if not_co_ its my fault and I_t_ll have to do better _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_About BJS features supported you can get pretty good idea what is supported from examples on website_co_ every example has android and windows build available for download. I will write a list of missing features in next few days._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-07T22:03:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried the lights example and had the same feeling. I_t_d say the FPS is capped at 30 but it_t_s hard to be sure without a counter._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-07-07T22:09:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Its quite possible that fps was set at 30 in Lime project file when I built those (all examples on site were built with Lime)_co_ I_t_m not sure anymore_co_ there are many of them... But you can check CPU usage on BabylonHx apps on windows_co_ it should be 0_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-07-07T22:59:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This project was one of the reasons why I decided to switch from Three.js to Babylon.js.  I was really happy yesterday to see the huge update on Github._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-08T09:21:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This truly amazes me. Makes me wanna start developing using Haxe _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-07-08T10:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey RaananW_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you should definitely try Haxe_co_ you won_t_t regret it !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the end of this year one of the frameworks that BabylonHx works with - _lt_a href_eq__qt_https_dd_//github.com/openfl/lime_qt_ rel_eq__qt_external nofollow_qt__gt_Lime_lt_/a_gt_ should support consoles as well. It already supports Nintendo WiiU and it will get support for PlayStation 3 and 4 and XBox One._lt_/p_gt__lt_p_gt_It would be great to see Babylon running on these._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe Deltakosh should consider this idea too _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see no reason for not using Haxe in developing Babylon and there are so many reasons for actually doing it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-07-08T14:50:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ not to be asking all stupid questions_co_ I have gone to haxe.org &amp_sm_ also to your repository_co_ and started looking around.  One thing that is eluding me is_co_ are you maintaining this entire directory by hand? _lt_a href_eq__qt_https_dd_//github.com/vujadin/BabylonHx/tree/master/com/babylonhx_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/vujadin/BabylonHx/tree/master/com/babylonhx_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I notice that Engine.hx has a version 2.0.0 in it_co_ but I also see some 2.1 stuff too.  Considering how fast BJS is advancing_co_ is keeping up possible? I see a number of Typescript to Haxe converters_co_ so I assume when a new typescript file is added you do a initial port from one of them_co_ at least._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also see that directory is missing Audio &amp_sm_ Debug.  Debug is not a production feature_co_ but Audio is.  If one wanted to implement Audio say_co_ would you do an initial typescript convert_co_ then surround it  with #defines for when in purejs_co_ &amp_sm_ write comparable code when not?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-07-08T18:32:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not sure what _qt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_maintaining this entire directory by hand_qt_ exactly means but I guess I do... _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Everything I was working on up until now works the  same across targets and across libraries used (Lime_co_ NME and Snow)_co_ so using the single code base you would get exactly the same result no matter which platform you target and which library you use. It was relatively easy as all three libs are using SDL 2 behind the scene to provide access to OpenGL/WebGL and they all provide the same api based on WebGL. _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Library specific stuff is located in _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/vujadin/BabylonHx/tree/master/com/babylonhx/utils_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/vujadin/BabylonHx/tree/master/com/babylonhx/utils_lt_/a_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I was also able to make assets loading working the same._lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Now that I have a stable base_co_ its relatively easy to keep up with BJS. Of course_co_ any help would be highly appreciated and welcomed._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_But audio is not that easy. 2D is also not that easy_co_ at least not if I would try to make it work the same across all three libs. Its much easier on the web where you have DOM and Canvas2D..._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_That_t_s why Audio and Debug are missing. If one would decide to use BabylonHx for his/her next android game today_co_ he/she would have to select one of these three libs and use its audio api for implementing sound in game. Which is not that bad. _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Having a single audio api similar or the same as the one in BabylonJS would be great_co_ but its a lot of work..._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I haven_t_t seen yet any TypeScript to Haxe converter_co_ I doubt that its even possible. While TypeScript is _qt_typed_qt__co_ its not _qt_typed_qt_ enough to call it a strongly typed language which Haxe is. There are some converters that are used to create Haxe _qt_externs_qt_ form TypeScript code_co_ but those are only classes/methods declarations (typing stuff) - not implementations_co_ and they are used only in JS development with haxe. _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I_t_m porting everything _qt_by hand_qt_ from typescript. _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_If one would like to implement Audio that works ONLY in JS target then yes_co_ one would convert typescript code to haxe and surround it with #defines for js/purejs._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_If you_t_re interested in starting with BabylonHx and the information provided on site is not enough for you to get started or some info is missing_co_ fell free to ask me anything. I would be glad to help._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-07-09T14:52:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_It is a very interesting approach.  I really like the potential CPU efficiency &amp_sm_ multi-threading possibilities.  As a mobile game solution_co_ is looks pretty viable as long as the game is not trying to access hardware on the devices_co_ like accelerometer with either device orientation cameras._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The approach allows you to use the libraries of other tool kits_co_ which is good.  You will run into the same issues as anyone using one_co_ but at least you can switch around based on the platform using #defines.  In the accelerometer example_co_ you might use purejs for iOS_co_ and Flash for Android &amp_sm_ MS.  This is probably only going to acceptable at the application level though.  If BabylonHx did it_co_ there would be a lot of issues from people who did not use that camera &amp_sm_ wondered why they were restricted.  I wish there was more a of common api for hardware access whose implementation was customized by each OS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To be fair_co_ XDK does not work with the device orientation cameras either.  They use Cordova to access the accelerometer_co_ but not the same API.  When I tried a Cordova project_co_ nothing seems to work (probably me doing something wrong though).  And everybody has problems with sound across all platforms._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-07-09T18:05:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_By the way_co_ Lime/OpenFl (one of BabylonHx backends) just got support for PlayStation Vita_dd_ _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_svmqFniZ91c_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.youtube.com/watch?v_eq_svmqFniZ91c_lt_/a_gt__lt_/p_gt__lt_p_gt_and the team has already started to work on PlayStation 4 and XBOX One support_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-07-15T08:49:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When we develop with babylonhx _co_  what do we do for UI ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We have developed web app in babylon 3D logic + angular/html/css UI.  So if we want to port to babylonhx for targeting mobile devices_co_ how will that work ? Specifically how do we port HTML/css UI ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-07-15T10:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The best and easiest way to do 2D would be to use BabylonHx with _lt_a href_eq__qt_http_dd_//www.openfl.org/_qt_ rel_eq__qt_external nofollow_qt__gt_OpenFL_lt_/a_gt_ and then draw UI with Flash drawing API provided by OpenFL._lt_/p_gt__lt_p_gt_You might also want to check _lt_a href_eq__qt_http_dd_//haxeui.org/_qt_ rel_eq__qt_external nofollow_qt__gt_HaxeUI_lt_/a_gt_ lib which is great_co_ it allows you to style UI with CSS so you can probably reuse some of your existing CSS._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zeno X","Date":"2015-09-20T12:24:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For the record_co_ the Lime and OpenFl backends are somewhat separately used (as I understand from the separate run targets and MainLime.hx vs. MainOpenFl tests)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How is the previously mentioned work on the _t_incomplete/missing features_t_ list going?_lt_br_gt______________________lt_br_gt_Haxe/HaXe is apparently pronounced like _t_hex_t_ or the letter _t_eks_t__co_ not as in _t_hacks_t__co_ _t_haxors_t__co_ or _t_axe_t_. Thanks_co_ French (Nicolas Canasse). _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-05-23T23:16:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_88498_qt_ data-ipsquote-contentid_eq__qt_15602_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1436347300_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/8/2015 at 2_dd_21 AM_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis truly amazes me. Makes me wanna start developing using Haxe _dd_-)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMe 2... I_t_m really interested in BabylonHx\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]