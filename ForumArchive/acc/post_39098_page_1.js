[{"Owner":"Wintersun","Date":"2018-07-26T11:09:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ newbie here coming from both 3d World and Web dev World.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcurrently I_t_m working on a project and I_t_ve made 3 handles for user to rotate the mesh on local Axis everything works fine. when the user finished doing what he does_co_ I save the object rotation by getting the quaternion like this mesh.rotationQuaternion and save it either as separate values for x y z and w or whole object_co_ but after reloading when I apply the same quaternion rotation to the object like mesh.rotationQuaternion _eq_ new BABYLON.Quaternion(this.rx_co_ this.ry_co_ this.rz_co_ this.ra)_sm_ I get a squashed and streched mesh in so many ways and it_t_s not the same shape at all. What am I doing wrong?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-26T15:48:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWelcome!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBased on your description it should work _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_can you repro in the PG?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wintersun","Date":"2018-07-26T15:52:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223290_qt_ data-ipsquote-contentid_eq__qt_39098_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532620109_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWelcome!!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBased on your description it should work _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_can you repro in the PG?_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI used vue.js wrapping it_co_ so it would take some time but sure\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-07-26T15:58:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32322-wintersun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32322_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32322-wintersun/_qt_ rel_eq__qt__qt__gt_@Wintersun_lt_/a_gt_ and welcome from me. You can just put your basic methods into a PG to see what happens. Here is a simple example where one box is created and rotated_co_ the rotation stored_co_ the box rotated again and the stored rotation applied to a different box obtaining the first rotation. If you want to re-apply it to the original box then take out the comment from the penultimate line.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#4GEDM2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#4GEDM2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps you can build on this to show how you carry out rotations_co_ store them and re-apply them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-26T16:00:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223256_qt_ data-ipsquote-contentid_eq__qt_39098_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532603354_qt_ data-ipsquote-userid_eq__qt_32322_qt_ data-ipsquote-username_eq__qt_Wintersun_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Wintersun said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmesh.rotationQuaternion _eq_ new BABYLON.Quaternion(this.rx_co_ this.ry_co_ this.rz_co_ this.ra)_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHere is another example.  Note what the Quaternion is (_lt_strong_gt_y_lt_/strong_gt__co_x_co_z)_co_ so different than Vector3._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ST43U%2354_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ST43U#54_lt_/a_gt__lt_br /_gt_\n\tStill that should do any squashing if you get those backwards..._lt_br /_gt_\n\tedit_dd_ oops. the main constructor is x_co_y_co_z_co_a_co_ but I normally use RotationYawPitchRoll.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the rotationQuaternion is NOT set then you need to get the mesh.rotation!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-26T16:09:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223256_qt_ data-ipsquote-contentid_eq__qt_39098_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532603354_qt_ data-ipsquote-userid_eq__qt_32322_qt_ data-ipsquote-username_eq__qt_Wintersun_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Wintersun said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_ve made 3 handles for user to rotate the mesh\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHave you found gizmo?_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/gizmo_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/gizmo_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWelcome to the forum_co_ by the way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wintersun","Date":"2018-07-26T16:11:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223297_qt_ data-ipsquote-contentid_eq__qt_39098_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532621356_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHave you found gizmo?_lt_br /_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/gizmo_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/gizmo_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWelcome to the forum_co_ by the way.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOMFG I_t_m gonna cry I made all of it from SCRATCH! _dd_((((((((((( oh no.... I even searched a lot for something similar. OH GOD KILL ME NOW. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wintersun","Date":"2018-07-26T16:15:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m gonna try again with gizmo and update you guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll the time I wasted...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-26T16:16:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s why the forum is an invaluable resource _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wintersun","Date":"2018-07-26T16:19:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou know I searched a lot with keywords like _qt_Axis_qt_ or _qt_Moving object with Axis_qt_ or _qt_Rotation Axis_qt_ the keyword was _qt_GIZMO_qt_ I_t_m such an idiot and all I got was someone else trying to do the same and he had the movement axis. You can_t_t even imagine the code I have right now. It_t_s monster_co_ even with refactoring.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much guys. should have done it earlier. it will definitely help. hope I don_t_t encounter the same problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-26T16:47:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have definitely some moments where I found something I made from scratch -- WAY too many times to mention! _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  The Gizmo is included with BabylonJS_co_ but here is another one that might give you some ideas - they are separate projects_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//ssatguru.github.io/BabylonJS-EditControl/demo_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//ssatguru.github.io/BabylonJS-EditControl/demo_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-26T18:54:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKnowing how to script your own gizmos too (even though you say a waste of time) is a pretty valid skill/good practice.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wintersun","Date":"2018-07-27T08:44:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223312_qt_ data-ipsquote-contentid_eq__qt_39098_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532623675_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI have definitely some moments where I found something I made from scratch -- WAY too many times to mention! _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  The Gizmo is included with BabylonJS_co_ but here is another one that might give you some ideas - they are separate projects_dd__lt_br /_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//ssatguru.github.io/BabylonJS-EditControl/demo_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//ssatguru.github.io/BabylonJS-EditControl/demo_lt_span_gt_﻿_lt_/span_gt__lt_/a_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you very much. I feel you dude.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223328_qt_ data-ipsquote-contentid_eq__qt_39098_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532631252_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tKnowing how to script your own gizmos too (even though you say a waste of time) is a pretty valid skill/good practice.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tnot that I mean it_t_s wasted because I didn_t_t learn anything but sometimes it_t_s actually more of a trial and error than learning. this wasn_t_t the latter although It helped a lot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ I_t_ve setup gizmo didn_t_t know It was on the alpha version of babylon but it_t_s really solid and does everything I wanted it to do although the same problem with camera angle and sometimes inverse moving on x and y axis is still there but that_t_s not a big problem. the problem with squash is gone now but I found a bug _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_after touching the gizmo doesn_t_t matter if you move or rotate or scale or not_co_ _lt_span_gt_the position of x will be inverted I mean if it_t_s positive it will be negative if it_t_s negative it will be positive._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_the other thing is the rotation of x and y will be inverted and at the same time swapped with each other so in example If I have something like this _eq_&gt_sm__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_position _lt_span_gt__dd_ (x_dd_ 1_co_ y_dd_1_co_ z_dd_1)_sm__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tqRotation_dd_ (x_dd_0.5_co_ y_dd_0.4_co_ z_dd_0.2_co_ w_dd_0.1)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tafter just touching the bounding box of gizmo (not even moving) the result will be _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_position _lt_span_gt__dd_ (x_dd_ -1_co_ y_dd_1_co_ z_dd_1)_sm__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_qRotation_dd_ (x_dd_-0.4_co_ y_dd_ -0.5_co_ z_dd_0.1_co_ w_dd_0.2)_sm__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_the scale won_t_t change._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_dunno if it_t_s a bug or I_t_m doing something wrong but I_t_m not manipulating anything in the process just storing and retrieving. I_t_m gonna make a playground If I can._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tz and w will be swapped as well. Scale Y will be inverted too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-27T14:22:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ttry to post a repro as a PG (playground) and we can figure out if it_t_s a bug or usage issue. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]