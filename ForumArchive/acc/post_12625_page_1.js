[{"Owner":"skalibran","Date":"2015-02-19T20:51:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey there_co_ its me again with two stupid questions  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ alt_eq__qt__dd_unsure_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I looked for many examples on the web to understand how I can execute code when a key is pressed. Unfortunetaly_co_ nothing worked for me. Is there a easy way to do this? I just need something like_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_if(key.A) _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_{ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_     variableNumber _eq_ 1_sm_ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_}_lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then I want to check some variables_co_ so I tried to use the console from the debug layer_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm__qt__gt_console_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm__qt__gt_log_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm__qt__gt_varTest_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_13px_sm__qt__gt_)_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The console still tells me only that the Babylon.js engine launched._lt_/p_gt__lt_p_gt_Any way to feed the console?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for help! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-02-19T21:14:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ try this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var keys_eq_{letft_dd_0_co_right_dd_0_co_forward_dd_0_co_back_dd_0}_sm_window.addEventListener(_qt_keydown_qt__co_ handleKeyDown_co_ false)_sm_window.addEventListener(_qt_keyup_qt__co_ handleKeyUp_co_ false)_sm_function handleKeyDown(evt){    if (evt.keyCode_eq__eq_65){//A        keys.left_eq_1_sm_    }    if (evt.keyCode_eq__eq_68){//D        keys.right_eq_1_sm_    }    if (evt.keyCode_eq__eq_87){//W        keys.forward_eq_1_sm_    }    if (evt.keyCode_eq__eq_83){//S        keys.back_eq_1_sm_    }}function handleKeyUp(evt){    if (evt.keyCode_eq__eq_65){        keys.left_eq_0_sm_    }    if (evt.keyCode_eq__eq_68){        keys.right_eq_0_sm_    }    if (evt.keyCode_eq__eq_87){        keys.forward_eq_0_sm_    }    if (evt.keyCode_eq__eq_83){        keys.back_eq_0_sm_    }}and hereengine.runRenderLoop(function () {     if (keys.left_eq__eq_1)    {        //move left    }    if (keys.right_eq__eq_1)    {        //move right    }    if (keys.back_eq__eq_1)    {        //move back    }    if (keys.forward_eq__eq_1)    {        //move forward    }})_sm__lt_/pre_gt__lt_p_gt_Isn_t_t the best_co_ but is a solution. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"skalibran","Date":"2015-02-19T21:29:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is exactly what I was looking for. Thanks! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_First question answered_lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-19T22:56:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For question 2_dd_ use BABYLON.Tools.Log(_qt_blah_qt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"skalibran","Date":"2015-02-20T14:23:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Alright_co_ thanks to you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]