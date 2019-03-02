[{"Owner":"matthewharwood","Date":"2016-04-25T04:53:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a pretty complex shape that is created from points and the createLines() method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ZAJZK%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ZAJZK#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Math is taken from a book I bought _lt_a href_eq__qt_http_dd_//www.amazon.com/Morphing-Mathematical-Transformations-Architects-Designers/dp/1780674139_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.amazon.com/Morphing-Mathematical-Transformations-Architects-Designers/dp/1780674139_lt_/a_gt_ and I would like to get a better idea of how the math draws the shape.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTherefore_co_ How would animate lines e.g. How can I get the lines to appear as if they are drawing in over a 10 second period?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-25T15:03:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can create a new shape every 50ms with added segments I guess _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ (even if this is not really efficient)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-04-25T16:17:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey deltakosh!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the welcoming!! And thank you for being so quick in your response!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah I thought I could do the short timeout.  It just bothered me so I didn_t_t try lol. but the timeout will satisfy my curiosity_co_ so thanks for the confidence.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have lots more questions as I stumble through learning babylonjs.  Looking forward to hearing from you more _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-25T19:48:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif the number of points in your line doesn_t_t change_co_ but only the point positions_co_ you could also re-use the CreateLine() method directly in the render loop\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe same for a LineSystem object _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#linesystem_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#linesystem_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]