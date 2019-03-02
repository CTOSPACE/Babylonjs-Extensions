[{"Owner":"thrice","Date":"2017-01-16T01:06:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am attempting to position a rectangle at the bottom left of the tracked node origin using Canvas2d_co_ I can_t_t figure it out for the life of me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1N9RJY%2377_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1N9RJY#77_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_dd_ modifying origin (0_co_0) does not position the rect at the bottom left of the tracked node. Basically I am building a card game_co_ and would like to be able to position various blocks of text_t_s relative to a particular card (attributes and such) - The cards themselves are planes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone have any ideas_co_ or do I need to take a different overall approach? I saw another example _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1N9RJY%2358_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1N9RJY#58_lt_/a_gt_ - in which a new WorldSpace canvas is created everytime text needs to be rendered_co_ but_co_ is that kosher performance wise? Maybe I_t_m just hesitant because rendering a canvas seems like an expensive operation (although I haven_t_t drilled into it to see what is actually going on yet)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways_co_ the tracked object strategy would be perfect / easiest by far_co_ IF I could set origin.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-01-16T03:13:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry bGui - even though _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ doesn_t_t support this any longer - what a shame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-01-16T07:57:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tTry updating line 22 (parameters x/y) _dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1N9RJY%2378_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1N9RJY#78_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-01-31T01:52:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ ya I did that already_co_ the point is_co_ I don_t_t know the height of the things_co_ and babylonjs/webgl seems to be based on a relative positioning strategy_co_ whereas the 2d library sizes/positioning os all relative to the screen size. (If I am understanding correctly)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-02-04T00:49:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBump_co_ still stumped on this one if anyone has any ideas\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-02-04T16:22:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m currently working on a fix for this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1744_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1744_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-02-05T15:01:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_162123_qt_ data-ipsquote-contentid_eq__qt_27725_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1486225375_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t22 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m currently working on a fix for this.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tedit_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1744_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1744_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ !_co_ that should help me out quite a bit_co_ been pulling my hair out over this\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-06T17:47:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24959_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/_qt_ rel_eq__qt__qt__gt_@thrice_lt_/a_gt_ sorry for the big delay to answer you_co_ it doesn_t_t happen often but I was unable to contribute/keep things up with the forum the last few days. I_t_m about to accept _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1744_qt_ rel_eq__qt_external nofollow_qt__gt_the PR_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ wrote to solve your issue_co_  your hairs will be happy about this._lt_br /_gt_\n\tI will build a new preview version of C2D when all the PR about it will be processed_co_ which is in less than a hour._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-06T18:59:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24959_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/_qt_ rel_eq__qt__qt__gt_@thrice_lt_/a_gt_ the preview build is updated and has the feature your requested.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-02-07T22:41:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ no problem and thanks so much! I will give it a try tonight\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]