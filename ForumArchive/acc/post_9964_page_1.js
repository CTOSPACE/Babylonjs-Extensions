[{"Owner":"RaananW","Date":"2014-10-23T13:54:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to understand the fundamental concepts of direction light and the shadow generator_co_ and how to combine them both.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am playing with the shadows demo from the playground - \n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tI have removed light2 (well_co_ commented it _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_ )\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI have added another sphere to show me the direction_t_s position (the new sphere_t_s position is light.direction)\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tLight direction is -1_co_ -2_co_ -1 . So far so good. Example here - _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#XOOY7_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#XOOY7_lt_/a_gt_ _co_ and everything is working fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I do the following - I change the light_t_s direction to -1_co_-1_co_-1. I wouldn_t_t have expected Any major difference (shadow should move a bit_co_ it should still be generated for the entire object).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat happens is this - _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#XOOY7%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#XOOY7#1_lt_/a_gt_ . Part of the shadow is simply cut out (Lower right corner_co_ in case you haven_t_t changed the camera perspective). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ I then decided to keep on experimenting. I have changed the direction to -1_co_ -20_co_ -1 . Once again_co_ I have expected that there won_t_t be a major difference in the shadow (I have just moved the light_t_s y a few units (well_co_ 18 _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_ ) down. This is how it looks like - _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#XOOY7%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#XOOY7#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis time_co_ the upper left corner is somehow filtered out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have continued to change the direction property a few more time_co_ but the only time a real full shadow appeared was when it was -1_co_ -2_co_ -1. I have also played with the light_t_s position_co_ it was still very hard to get the shadows working with different configuration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do believe my major misunderstanding is about the direction property of the directional light. The direction is the point to which the light source is directed to. Light is emitted from  everywhere_co_ which means that technically objects should be lit from the bottom as well. The position property of the light is just for the shadow generation. Otherwise it is not really used (I hope I got that right).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat am I missing? Why is the shadow not working correctly?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-23T17:13:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have to admit that shadow maps are not clear enough. Your assumption is right for lighting. But for shadows_co_ I need to create a shadow map and to do so I need a position (the point of view of the light)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So for shadows_co_ you have to consider that I_t_m taking a snapshot of the scene from the position of the light. This snapshot uses the direction to know where to look_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-23T17:15:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So for instance when in your scene you see the shadow disappearing this is because the object is out of the shadow map. To fix that you have to move the light backwards  to allow it to see more things _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-10-24T07:52:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That did the trick _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Changing the y position of the light in _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#XOOY7%232_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-pla...es.net/#XOOY7#2_lt_/a_gt_ to 90 worked._lt_/p_gt__lt_p_gt_So_co_ in general_co_ it would be wise to put the light up high in any case_co_ right? or does it damage performance?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-24T16:14:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No that_t_s perfectly fine_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dinkelborg","Date":"2014-10-24T20:26:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wouldn_t_t it be possible to check inside the directional light script_co_ if any object is outside of the shadowMap so if any object is not inside the _t_view field_t_ of the directional light _qt_Camera_qt_ and then Log at least a warning to the console?_lt_br_gt__lt_br_gt_I think it would help people who are new to the field..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Baker Xiao","Date":"2017-08-23T22:22:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ it seems moving the light up high will cause the shadows to look more blurry. it can be seen in _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/?15_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/?15_lt_/a_gt_ if you adjust the y value of the light1 position to 400 you will see the shadows change. \n_lt_/p_gt_\n\n_lt_p_gt_\n\thow do we cast a shadow from a directional light onto every object in the scene without losing shadow quality?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-24T15:43:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is always a trade-off _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to embrace all the scene_co_ you will have to move the light as it defines the point of view. To avoid losing shadow quality you will have to increase the texture size\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]