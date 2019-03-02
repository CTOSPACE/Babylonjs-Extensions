[{"Owner":"KarelAnker","Date":"2015-10-27T13:30:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is this possible with Babylon_co_ as creating a new BABYLON.Sound will preload your song fully before you can listen to it. I basically want it to download parts. When you have a 10 minute song_co_ I don_t_t want it to download all the 10 minutes_co_ I want it to download the part it_t_s currently playing + some minutes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-27T14:38:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Currently_co_ I_t_m using a XHR to load &amp_sm_ decode the sound with Web Audio._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you_t_d like just to stream the music from your web server_co_ simply use the HTML5 audio tag. Isn_t_t it enough?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KarelAnker","Date":"2015-10-27T16:20:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_102963_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18189_qt_ data-ipsquote-username_eq__qt_davrous_qt_ data-cite_eq__qt_davrous_qt_ data-ipsquote-timestamp_eq__qt_1445956732_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Currently_co_ I_t_m using a XHR to load &amp_sm_ decode the sound with Web Audio._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you_t_d like just to stream the music from your web server_co_ simply use the HTML5 audio tag. Isn_t_t it enough?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_But there_t_s no way to have it 3D spatial with a HTML audio tag?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-28T19:02:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I_t_ve just added support for sound streaming based on HTML5 Audio tag as input to Web Audio. I need to do further testing before shipping it on the github but it seems to work well so far._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the feature request _sm_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-30T18:43:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve just finished my tests and published the updated version of BABYLON.Sound on the github_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Audio/babylon.sound.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Audio/babylon.sound.ts_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It will be on the playground soon and I_t_ll share a demo on it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the meantime_co_ it_t_s very easy to use. Just set a _t_streaming_dd_ true_t_ in the options of the Sound constructor and it will stream the sound using the HTML Audio tag rather than downloading &amp_sm_ decoding it first._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ex_dd_ var violons18 _eq_ new BABYLON.Sound(_qt_Violons_qt__co_ _qt_./coding4fun2015.mp3_qt__co_ scene_co_ null_co_ { loop_dd_ true_co_ autoplay_dd_ true_co_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_strong_gt_streaming_dd_ true _lt_/strong_gt__lt_/span_gt_})_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All other features are implemented to support this new source_dd_ pause_co_ stop_co_ play_co_ 3D spatialization_co_ analyser &amp_sm_ directional sound._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-10-30T19:38:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-31T11:38:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is a simple sample_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Y9YWK_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Y9YWK_lt_/a_gt_ then use the Sound element as described in the doc to apply 3D_co_ playrate_co_ whatever._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can see in the Web Audio tab of Firefox that a MediaElement (HTML5 Audio tag) is being used as a source with the streaming_dd_ true option being enabled._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2015/post-5482-0-29704600-1446291546.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2015/post-5482-0-29704600-1446291546.jpg_qt_ data-fileid_eq__qt_5466_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5482-0-29704600-1446291546.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-31T22:45:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just on a side note_dd_ Is that SpeechSynthesisUtterance actually a _qt_real_qt_ thing yet? I think it_t_s pretty cool using plain text and transform it into audio. Any plans on integrating it with Babylon_co_ yet?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KarelAnker","Date":"2015-11-01T10:00:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_EDIT_dd__lt_br_gt__lt_br_gt_It seems that the HTML5 audio tag does not allow any streaming outside of the local file system._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Try streaming _qt__lt_a href_eq__qt_http_dd_//ccmixter.org/content/teru/teru_-_We_re_on_the_Roll.mp3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ccmixter.org/content/teru/teru_-_We_re_on_the_Roll.mp3_lt_/a_gt__qt__co_ the header has Access-Control-Allow-Origin_dd_ *_co_ but for some reason when you_t_re trying to stream Chrome outputs _qt_MediaElementAudioSource outputs zeroes due to CORS access restrictions for ......._qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can check the receiving headers at _lt_a href_eq__qt_http_dd_//www.rexswain.com/httpview.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.rexswain.com/httpview.html_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KarelAnker","Date":"2015-11-01T15:40:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Got it to work! You basically forgot to set the crossOrigin attribute to anonymous._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var music _eq_ new BABYLON.Sound(_qt_Music_qt__co_ ........................)_sm_music._htmlAudioElement.crossOrigin _eq_ _qt_anonymous_qt__sm__lt_/pre_gt__lt_p_gt_I would create a pull request but I don_t_t dare to touch it  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(Also_co_ it seems that you can_t_t attach the audio to an object_co_ it_t_s always 2D with the streaming tag)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-01T15:48:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_103686_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18189_qt_ data-ipsquote-username_eq__qt_KarelAnker_qt_ data-cite_eq__qt_KarelAnker_qt_ data-ipsquote-timestamp_eq__qt_1446392403_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I would create a pull request but I don_t_t dare to touch it _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do not hesitate.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KarelAnker","Date":"2015-11-01T15:56:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_103688_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18189_qt_ data-ipsquote-username_eq__qt_Dad72_qt_ data-cite_eq__qt_Dad72_qt_ data-ipsquote-timestamp_eq__qt_1446392890_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Do not hesitate.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I_t_m unsure how_co_ as I don_t_t know how to create the TypeScripts and the minified files_co_ and I don_t_t know which file to exactly edit_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd__lt_/p_gt__lt_p_gt_created a pull request_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-11-02T11:44:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_103686_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18189_qt_ data-ipsquote-username_eq__qt_KarelAnker_qt_ data-cite_eq__qt_KarelAnker_qt_ data-ipsquote-timestamp_eq__qt_1446392403_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Got it to work! You basically forgot to set the crossOrigin attribute to anonymous._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var music _eq_ new BABYLON.Sound(_qt_Music_qt__co_ ........................)_sm_music._htmlAudioElement.crossOrigin _eq_ _qt_anonymous_qt__sm__lt_/pre_gt__lt_p_gt_I would create a pull request but I don_t_t dare to touch it  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(Also_co_ it seems that you can_t_t attach the audio to an object_co_ it_t_s always 2D with the streaming tag)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can make it a 3D sound. Simply attach the sound to a mesh or use the boolean to make it 3D._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-11-02T12:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For instance_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2DXHIC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2DXHIC_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You_t_ll hear the sound moving around your head and if you_t_re moving too far way from the box_co_ you won_t_t hear the music anymore._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-11-02T17:06:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_103691_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18189_qt_ data-ipsquote-username_eq__qt_KarelAnker_qt_ data-cite_eq__qt_KarelAnker_qt_ data-ipsquote-timestamp_eq__qt_1446393419_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_m unsure how_co_ as I don_t_t know how to create the TypeScripts and the minified files_co_ and I don_t_t know which file to exactly edit_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd__lt_/p_gt__lt_p_gt_created a pull request_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve just added it in the TypeScript file. We_t_ve just updated the Playground with this new version! Enjoy!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-07T14:58:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This new feature has been forgotten to be added in _qt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_what_t_s new.md_qt_ for 2.3_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-09T18:19:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes @davrous needs to update it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-11T09:44:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I added_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]