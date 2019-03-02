[{"Owner":"duleaux","Date":"2017-12-22T19:41:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to load an OBJ file from my local machine using ImportMesh or addMeshTask_co_ but nothing I_t_ve tried so far works.  I_t_ve read probably every posting on this topic on the internet_co_ including those in this forum_co_ over the past 24 hours and can_t_t find a solution.  Here is the basic code that fails and triggers the _qt_loader.onTaskError_qt_ error handler_co_ all within my createScene() function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t            var loader _eq_ new BABYLON.AssetsManager(scene)_sm__lt_br /_gt_\n\t            var pos _eq_ function (t) {_lt_br /_gt_\n\t                t.loadedMeshes.forEach(function (m) {_lt_br /_gt_\n\t                    m.position.x +_eq_ 10_sm__lt_br /_gt_\n\t                    m.position.y -_eq_ 5_sm__lt_br /_gt_\n\t                    m.material _eq_ material_sm__lt_br /_gt_\n\t                })_sm__lt_br /_gt_\n\t            }_sm__lt_br /_gt_\n\t            var shelves _eq_ loader.addMeshTask(_qt__qt__co_ _qt__qt__co_ _qt__qt__co_ _qt_shelves.obj_qt_)_sm__lt_br /_gt_\n\t            shelves.onSuccess _eq_ pos_sm__lt_br /_gt_\n\t            loader.onTaskError _eq_ function (task) {_lt_br /_gt_\n\t                alert(_t_Error with loading by assetsManager..._t_)_sm__lt_br /_gt_\n\t            }_sm__lt_br /_gt_\n\t            loader.onFinish _eq_ function () {_lt_br /_gt_\n\t                engine.runRenderLoop(function () {_lt_br /_gt_\n\t                    scene.render()_sm__lt_br /_gt_\n\t                })_sm__lt_br /_gt_\n\t            }_sm__lt_br /_gt_\n\t            BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV _eq_ true_sm__lt_br /_gt_\n\t            loader.load()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tI know that my _qt_shelves.obj_qt_ file is okay because I can load it using this Playground example_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6N13NV%2333_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#4588c5_sm_font-size_dd_14px_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#6N13NV#33_lt_/a_gt_.  However_co_ this Playground uses a file chooser and converts the selected file into a File object that is loaded using this command_dd_  loader.addMeshTask(_qt__qt__co_ _qt__qt__co_ _qt_file_dd__qt__co_ objectFileName).  My understanding is Javascript File objects can_t_t be directly instantiated_co_ so this does not seem to be an option for what I am trying to accomplish.  I also am not sure if the loader in my code is even able to find the _qt_shelves.obj_qt_ file (I_t_ve placed it in virtually every location in my computer_co_ but to no avail).  If anyone has any ideas please let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-24T12:24:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29764-duleaux/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29764_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29764-duleaux/_qt_ rel_eq__qt__qt__gt_@duleaux_lt_/a_gt__co_ welcome to the forum.  No success and no replies yet?  Sorry. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t have much experience with this subject_co_ but often_co_ people get a free github account_co_ and publish their test-models... there.  Here_t_s my free account_dd_  _lt_a href_eq__qt_https_dd_//github.com/Wingnutt_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Wingnutt_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s look inside _lt_a href_eq__qt_https_dd_//github.com/Wingnutt/misc_qt_ rel_eq__qt_external nofollow_qt__gt_my _t_misc_t_ folder_lt_/a_gt_.  See the file _t_mesh01.obj_t_ ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ off to the playground.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3FV2X%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3FV2X#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice the strange _t_rawgit_t_ URL domain?   But_co_ it works.  Object loaded.  And_co_ I didn_t_t need to create/find a web server to store my .obj upon.  Github stored it for free_co_ and allowed me to _qt_drag_t_n_t_drop_qt_ the file into the misc folder (be sure to hit _t_commit changes_t_ button at bottom_co_ after the drag-drop).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut yeah_co_ _lt_strong_gt_I THINK_lt_/strong_gt_ scene mesh are primarily loaded from web servers_co_ and I_t_m not sure how well .addMeshTask works... using local or localHost files. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tStay tuned - others will surely comment soon (and likely_co_ they will have more experience than I have).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Report thoughts/discoveries_co_ please.  (thx)  I have _t_featured_t_ this thread_co_ so it has a green star next to its title.  That will surely get lots of attention_co_ but we might need to wait until Christmas folk finish playing-with their new toys.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"duleaux","Date":"2017-12-24T15:45:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi Wingnut - this is great_co_ thank you.  I copied your playground code into my local app and all works well.  Substituting your github-hosted file with my locally-stored file_co_ however_co_ yields the same result as before - i.e._co_ nothing is displayed.  loader.addMeshTask(...) seems unable or unwilling to allow access to local files_co_ perhaps as a security measure.  I will sign up for a github account and load my files at that location - seems to be the best solution.  Thanks again for your help!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-12-24T19:33:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyou may need to run a local webserver for local access (ie_dd_ http_dd_// instead of file_dd_//).  if you open your dev tools and go to network tab then you will likely have a 404 error (not found) and perhaps a CORS preflight error. it may just be a matter of adjusting the file location (correct folder and case).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]