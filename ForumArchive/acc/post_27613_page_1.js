[{"Owner":"zhutq","Date":"2017-01-12T01:54:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to draw triangle wireframe on shaded mesh and ensure it works with rendering groups. (Previous thread_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/27539-how-to-draw-triangle-wireframe-on-shaded-mesh/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/27539-how-to-draw-triangle-wireframe-on-shaded-mesh/_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI insert some code to BABYLON.Mesh.prototype.render to achieve the effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A1H3J_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A1H3J_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you think about this approach?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-12T05:16:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is smart _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut for maintenance reason I would just suggest cloning your sphere and rendering your object twice (clone will share all buffers so it will be comparable to what you have now)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zhutq","Date":"2017-01-13T01:57:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_158699_qt_ data-ipsquote-contentid_eq__qt_27613_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484198206_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t20 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt is smart _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut for maintenance reason I would just suggest cloning your sphere and rendering your object twice (clone will share all buffers so it will be comparable to what you have now)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOh_co_ that_t_s great! I didn_t_t know they_t_ll share buffers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]