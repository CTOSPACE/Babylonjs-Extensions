[{"Owner":"benoit-1842","Date":"2015-02-20T16:13:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have all those codes in my folder.  I have tried a lot of stuff but I am stucked !!!!  What I want to do is to visualize my model in two viewports...  I have used that with a different code before_co_ but now it doesn_t_t work it_t_s always saying that my camera is not defined....  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanx in advance to the community_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xZnQwTlQ3WTI3OUk&amp_sm_usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xZnQwTlQ3WTI3OUk&amp_sm_usp_eq_sharing_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T16:39:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_try_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var Basic _eq_ (function () {    function Basic(scene) {        // backgournd color        scene.clearColor _eq_ new BABYLON.Color3(.1_co_ .1_co_ .1)_sm_        //light        var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_           // Camera 1 (right side)\tvar camera1 _eq_ new BABYLON.ArcRotateCamera(_qt_camera1_qt__co_ 0_co_ Math.PI/2_co_ 20_co_ new BABYLON.Vector3(0_co_ 7_co_ 0)_co_ scene)_sm_\tscene.activeCameras.push(camera1)_sm_ \t// Camera 2 (left side)\tvar camera2 _eq_ new BABYLON.ArcRotateCamera(_qt_camera2_qt__co_ -Math.PI/2_co_ Math.PI/2_co_ 20_co_ new BABYLON.Vector3(0_co_ 7_co_ 0)_co_ scene)_sm_\tscene.activeCameras.push(camera2)_sm_ \t// Viewports\tcamera1.viewport _eq_ new BABYLON.Viewport(0.5_co_ 0_co_ 0.5_co_ 1.0)_sm_ // right\tcamera2.viewport _eq_ new BABYLON.Viewport(0.0_co_ 0_co_ 0.5_co_ 1.0)_sm_ // left \t// Camera control\t\tscene.activeCameras[0] _eq_ camera1_sm_\tscene.activeCameras[0].attachControl(canvas_co_ true)_sm_    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T16:42:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s still shooting the error _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanx for the help...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T16:48:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You might not try to duplicate this in the playground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here too you have errors_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_Ini.prototype.iniCamera _eq_ function () { if (this.scene.activeCamera) { this.scene.activeCamera.attachControl(this.canvas)_sm_ } }_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_corect_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_this.scene.activeCamera _eq_&gt_sm_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_this.scene.activeCameras[0]_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_and _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_this.scene.activeCamera.attachControl _eq_&gt_sm_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_this.scene.activeCameras[0].attachControl(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_this.canvas)_sm__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T16:59:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanx for helping_co_ but I stil got this camera error.....  weird !!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Merci_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T17:05:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here_t_s an update file......._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xZ09RTVIzaVNEMTA&amp_sm_usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xZ09RTVIzaVNEMTA&amp_sm_usp_eq_sharing_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T17:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have copied wrong. watch online 29 and 30. have you understand what you copy? the error is obvious._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_﻿var Ini _eq_ (function () {    function Ini() {        var _this _eq_ this_sm_        this.canvas _eq_ document.getElementById(_qt_canvas_qt_)_sm_        if (!BABYLON.Engine.isSupported()) {            window.alert(_t_Browser not supported_t_)_sm_        } else {            this.engine _eq_ new BABYLON.Engine(this.canvas_co_ true)_sm_            this.scene _eq_ new BABYLON.Scene(this.engine)_sm_            this.main _eq_ new Main(this.scene)_sm_            window.addEventListener(_qt_resize_qt__co_ function () {                return _this.engine.resize()_sm_            })_sm_            // Assets_co_ assets manager            // var assets _eq_ new Assets(this.scene)_sm_            // assets.bind(Constant.EVENT_ASSETS_MANAGEMENT_co_ (event) _eq_&gt_sm_ this.assetsAreLoaded(event))_sm_            this.scene.executeWhenReady(function () {                return _this.iniCamera()_sm_            })_sm_            this.engine.runRenderLoop(function () {                return _this.mainLoop()_sm_            })_sm_        }    }\t\tthis.scene.activeCamera _eq_&gt_sm_ this.scene.activeCameras[0]and this.scene.activeCamera.attachControl _eq_&gt_sm_ this.scene.activeCameras[0].attachControl(this.canvas)_sm_            }    }_sm_    Ini.prototype.mainLoop _eq_ function () {        var container _eq_ document.getElementById(_qt_fps_qt_)_sm_        container.innerHTML _eq_ _qt_babylon.js _dd_ _qt_ + this.engine.getFps().toFixed(0) + _qt_ fps_qt_ + _qt_&lt_sm_br&gt_sm__qt__sm_        this.main.loop()_sm_        this.scene.render()_sm_    }_sm_    return Ini_sm_})()_sm__lt_/pre_gt_Look here how I did._lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1IG874%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1IG874#13_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T18:29:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry about my mistake   !!!!!!!   But now when I lauch it they say basic not defined.....  This thing is tough !!!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanx_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T18:36:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here_t_s my main.js file_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_function Main(scene) {_lt_/div_gt__lt_div_gt_        this.frame _eq_ 0_sm__lt_/div_gt__lt_div_gt_        this.dummies _eq_ []_sm__lt_/div_gt__lt_div_gt_        this.scene _eq_ scene_sm__lt_/div_gt__lt_div_gt_// error is here _eq__eq__eq_&gt_sm_ with that basic_lt_/div_gt__lt_div_gt_        var basic _eq_ new Basic(scene)_sm_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        console.log(DataJson.data.length)_sm__lt_/div_gt__lt_div_gt_        console.log(DataJson.data.Data.length)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        var index _eq_ 0_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        for (var prop in DataJson.data.Data[0]) {_lt_/div_gt__lt_div_gt_            // result +_eq_ objName + _qt_._qt_ + prop + _qt_ _eq_ _qt_ + obj[prop] + _qt_\\n_qt__sm__lt_/div_gt__lt_div_gt_            if (prop _eq__eq_ _qt_time_qt_)_lt_/div_gt__lt_div_gt_                continue_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            if (index _eq__eq_ 3) {_lt_/div_gt__lt_div_gt_                console.log(prop)_sm__lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ 0.2_co_ scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_FootRight_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_FootLeft_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_HandRight_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_HandLeft_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm__lt_/div_gt__lt_div_gt_            } else {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .05_co_ scene)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            var q _eq_ new BABYLON.Quaternion()_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            q.x _eq_ DataJson.data.Data[0][prop].qx_sm__lt_/div_gt__lt_div_gt_            q.y _eq_ DataJson.data.Data[0][prop].qy_sm__lt_/div_gt__lt_div_gt_            q.z _eq_ DataJson.data.Data[0][prop].qz_sm__lt_/div_gt__lt_div_gt_            q.w _eq_ DataJson.data.Data[0][prop].qw_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            mesh.rotationQuaternion _eq_ q_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            mesh.position.x _eq_ DataJson.data.Data[0][prop].x_sm__lt_/div_gt__lt_div_gt_            mesh.position.y _eq_ DataJson.data.Data[0][prop].y_sm__lt_/div_gt__lt_div_gt_            mesh.position.z _eq_ DataJson.data.Data[0][prop].z_sm__lt_/div_gt__lt_div_gt_            this.dummies.push(mesh)_sm__lt_/div_gt__lt_div_gt_            index++_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_    Main.prototype.loop _eq_ function () {_lt_/div_gt__lt_div_gt_        var index _eq_ 0_sm__lt_/div_gt__lt_div_gt_        for (var prop in DataJson.data.Data[this.frame]) {_lt_/div_gt__lt_div_gt_            if (prop _eq__eq_ _qt_time_qt_)_lt_/div_gt__lt_div_gt_                continue_sm__lt_/div_gt__lt_div_gt_            this.dummies[index].position.x _eq_ DataJson.data.Data[this.frame][prop].x_sm__lt_/div_gt__lt_div_gt_            this.dummies[index].position.y _eq_ DataJson.data.Data[this.frame][prop].y_sm__lt_/div_gt__lt_div_gt_            this.dummies[index].position.z _eq_ DataJson.data.Data[this.frame][prop].z_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            var q _eq_ new BABYLON.Quaternion()_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            q.x _eq_ DataJson.data.Data[this.frame][prop].qx_sm__lt_/div_gt__lt_div_gt_            q.y _eq_ DataJson.data.Data[this.frame][prop].qy_sm__lt_/div_gt__lt_div_gt_            q.z _eq_ DataJson.data.Data[this.frame][prop].qz_sm__lt_/div_gt__lt_div_gt_            q.w _eq_ DataJson.data.Data[this.frame][prop].qw_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            this.dummies[index].rotationQuaternion _eq_ q_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            index++_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        this.frame++_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        console.log(this.frame)_sm__lt_/div_gt__lt_div_gt_    }_sm__lt_/div_gt__lt_div_gt_    return Main_sm__lt_/div_gt__lt_div_gt_})()_sm__lt_/div_gt__lt_div_gt_//# sourceMappingURL_eq_Main.js.map_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T19:35:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This can be_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var basic _eq_ new Basic.Basic(scene)_sm__lt_/pre_gt__lt_p_gt_I_t_m not sure that you are using prototyping system correctly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T19:39:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah I think I am struggling right now....  I always have error like scene not defined basic not defined etc...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanx for helping me_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T20:05:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is something closer to what you had to do._lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var Main _eq_ Main || {}_sm_(function (){    Main.scene _eq_ function()\t{        var _this _eq_ this_sm_\t\tthis.container _eq_ document.getElementById(_qt_fps_qt_)_sm_\t\t        this.canvas _eq_ document.getElementById(_qt_canvas_qt_)_sm_ \t\tthis.engine _eq_ null_sm_\t\tthis.scene _eq_ null_sm_\t\t\t\t//.... _eq_ null\t\t    }_sm_\t\tMain.scene.prototype.Load _eq_ function()\t{\t\tif (!BABYLON.Engine.isSupported()) {            window.alert(_t_Browser not supported_t_)_sm_        }\t\telse {            this.engine _eq_ new BABYLON.Engine(this.canvas_co_ true)_sm_            this.scene _eq_ new BABYLON.Scene(this.engine)_sm_            this.Mesh()_sm_            window.addEventListener(_qt_resize_qt__co_ function () {                _this.engine.resize()_sm_            })_sm_\t\t\t            this.scene.executeWhenReady(function () {                _this.Basic()_sm_            })_sm_\t\t\t            this.engine.runRenderLoop(function () {               \t\t\t\t_this.container.innerHTML _eq_ _qt_babylon.js _dd_ _qt_ + _this.engine.getFps().toFixed(0) + _qt_ fps_qt_ + _qt_&lt_sm_br&gt_sm__qt__sm_\t\t\t\t_this.loop()_sm_\t\t\t\t_this.scene.render()_sm_            })_sm_        }\t}_sm_\t\t\tMain.scene.prototype.Mesh _eq_ function()\t{        \t\tthis.frame _eq_ 0_sm_        this.dummies _eq_ []_sm_\t\t        var index _eq_ 0_sm_        for (var prop in DataJson.data.Data[0]) {            // result +_eq_ objName + _qt_._qt_ + prop + _qt_ _eq_ _qt_ + obj[prop] + _qt_\\n_qt__sm_            if (prop _eq__eq_ _qt_time_qt_)                continue_sm_            if (index _eq__eq_ 3) {                console.log(prop)_sm_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ 0.2_co_ scene)_sm_            } else if (prop _eq__eq_ _qt_FootRight_qt_) {                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm_            } else if (prop _eq__eq_ _qt_FootLeft_qt_) {                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm_            } else if (prop _eq__eq_ _qt_HandRight_qt_) {                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm_            } else if (prop _eq__eq_ _qt_HandLeft_qt_) {                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ scene)_sm_            } else {                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .05_co_ scene)_sm_            }            var q _eq_ new BABYLON.Quaternion()_sm_            q.x _eq_ DataJson.data.Data[0][prop].qx_sm_            q.y _eq_ DataJson.data.Data[0][prop].qy_sm_            q.z _eq_ DataJson.data.Data[0][prop].qz_sm_            q.w _eq_ DataJson.data.Data[0][prop].qw_sm_            mesh.rotationQuaternion _eq_ q_sm_            mesh.position.x _eq_ DataJson.data.Data[0][prop].x_sm_            mesh.position.y _eq_ DataJson.data.Data[0][prop].y_sm_            mesh.position.z _eq_ DataJson.data.Data[0][prop].z_sm_            this.dummies.push(mesh)_sm_            index++_sm_        }    }_sm_\t\t\tMain.scene.prototype.Basic() {        // backgournd color        this.scene.clearColor _eq_ new BABYLON.Color3(.1_co_ .1_co_ .1)_sm_        //light        var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ this.scene)_sm_        //camera        this.camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 1_co_ -15_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ this.scene)_sm_        this.camera.setPosition(new BABYLON.Vector3(5_co_ 5_co_ 5))_sm_        this.camera.lowerBetaLimit _eq_ 5_sm_        this.camera.upperBetaLimit _eq_ (Math.PI / 2) * .95_sm_   \t\t// Camera 1 (right side)\t\tvar camera1 _eq_ new BABYLON.ArcRotateCamera(_qt_camera1_qt__co_ 0_co_ Math.PI/2_co_ 20_co_ new BABYLON.Vector3(0_co_7_co_0)_co_ this.scene)_sm_\t\tthis.scene.activeCameras.push(camera1)_sm_\t \t\t// Camera 2 (left side)\t\tvar camera2 _eq_ new BABYLON.ArcRotateCamera(_qt_camera2_qt__co_ -Math.PI/2_co_ Math.PI/2_co_ 20_co_ new BABYLON.Vector3(0_co_7_co_0)_co_ this.scene)_sm_\t\tthis.scene.activeCameras.push(camera2)_sm_\t \t\t// Viewports\t\tcamera1.viewport _eq_ new BABYLON.Viewport(0.5_co_ 0_co_ 0.5_co_ 1.0)_sm_ // right\t\tcamera2.viewport _eq_ new BABYLON.Viewport(0.0_co_ 0_co_ 0.5_co_ 1.0)_sm_ // left\t \t\t// Camera control\t\t\tthis.scene.activeCameras[0] _eq_ camera1_sm_\t\tthis.scene.activeCameras[0].attachControl(this.canvas_co_ true)_sm_    }_sm_\t    Main.scene.prototype.loop _eq_ function ()\t{        var index _eq_ 0_sm_        for (var prop in DataJson.data.Data[this.frame]) {            if (prop _eq__eq_ _qt_time_qt_)                continue_sm_            this.dummies[index].position.x _eq_ DataJson.data.Data[this.frame][prop].x_sm_            this.dummies[index].position.y _eq_ DataJson.data.Data[this.frame][prop].y_sm_            this.dummies[index].position.z _eq_ DataJson.data.Data[this.frame][prop].z_sm_            var q _eq_ new BABYLON.Quaternion()_sm_            q.x _eq_ DataJson.data.Data[this.frame][prop].qx_sm_            q.y _eq_ DataJson.data.Data[this.frame][prop].qy_sm_            q.z _eq_ DataJson.data.Data[this.frame][prop].qz_sm_            q.w _eq_ DataJson.data.Data[this.frame][prop].qw_sm_            this.dummies[index].rotationQuaternion _eq_ q_sm_            index++_sm_        }        this.frame++_sm_        console.log(this.frame)_sm_    }_sm_\t\t})()_sm__lt_/pre_gt__lt_p_gt_Use in HTML_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_var myScene _eq_ new Main.scene()_sm_myScene .Load()_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T20:13:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanx right now my head hurts I will give it a try later but I would like to thank you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Merci_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T20:58:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Where I should put the html script inside my html...  Like after the &lt_sm_div&gt_sm__co_ &lt_sm_body&gt_sm_ ?  I really don_t_t know...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanx a lot_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T22:03:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_If you do not know this_co_ I think you should read the tutorial on how to program HTML5 and Javascript._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_already_co_  you use HTML 4  _dd_ _lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Courier New_t__co_ Courier_co_ monospace_co_ arial_co_ sans-serif_sm__qt__gt_&lt_sm_!DOCTYPE HTML PUBLIC _qt_-//W3C//DTD HTML 4.0 Transitional//EN_qt_&gt_sm_ ????????_lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Why? You want to use the HTML5 canvas Balide No?_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I feel that you do not even have basic HTML programming. You should start there I think._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_div_gt_Then learn Javascript and then start learning the use of Babylon. There are tutorials available in the documentation._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Nobody will do the work in your place and that_t_s what I started to do and you do not seem to understand. I think I will not help you as well._lt_/div_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-20T23:01:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah you are right in a certain way....  I try the best I can to use the babylon.js potential a little bit too fast....  It_t_s just I am confuse with everything I found...  Since I am using babylon.js (3 months now) I never had to use html...  I was always using the same template an index and a localhost....  It_t_s the first time I am face to face with the html inside babylon.js...  I just have a good idea of what I want to produce.  But I must say that I am eager to learn and I think you are right_co_ I should learn html to be more fluent in babylon.js.....  I know javascript fairly well now_co_ but I must confess that_t_s the first time I will use html in a babylon.js context....._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanx a lot for your insight_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-20T23:54:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I prefer to steer directly on track to you. HTML is very easy to learn_co_ in 2 weeks_co_ you should have the basics._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Do not try to go too fast. _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Good luck anyway.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-26T15:13:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Dad72....  I would like to say that I want to excuse myself to have rush myself into babylon.js and asking stupid question.......  I pass the week doing tutorials and I am presently reading a book call HTML 5 games.  I would like to say too that I am very proud because without rushing things I have made work the code you have send to me.  There was error and with some hard work I solved the problem.....  Now I just have to continue my work in the good direction...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Merci beaucoup Dad72 de m_t_avoir donne d_t_une certaine un petit coup de pied en quelque part parce que c_t_est qu_t_en informatique on est beaucoup plus productif et heureux lorsqu_t_on comprend nos instruments et nos outils...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-26T15:33:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No problem. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ne vous excusez pas. ce n’est pas grave. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-26T15:40:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_merci beaucoup de repondre....  Ca me fait du bien d_t_entendre ca......._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-26T16:51:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Il n_t_y a jamais de mauvaise question Benoit_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-26T16:57:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Merci de cette reponse a la vorlon !!!!!!!!!  Donc rapidement j_t_ai une petite question (j_t_en ai toujours  !!!!) _dd_ j_t_ai de la difficulte a avoir un gros plan rapproche avec ce code....Je ne sais pas quelle variable change.....  P-E que tu peux m_t_aider.....  Last post in French....  But is it me or the forum is almost 50 % from country from the francophonie ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Merci_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_var Main _eq_ Main || {}_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_(function ()_lt_/div_gt__lt_div_gt_{_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    Main.scene _eq_ function()_lt_/div_gt__lt_div_gt_{_lt_/div_gt__lt_div_gt_         _this _eq_ this_sm__lt_/div_gt__lt_div_gt_this.container _eq_ document.getElementById(_qt_fps_qt_)_sm__lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_        this.canvas _eq_  document.getElementById(_qt_canvas_qt_)_sm_ _lt_/div_gt__lt_div_gt_this.engine _eq_ null_sm__lt_/div_gt__lt_div_gt_this.scene _eq_ null_sm__lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_//.... _eq_ null_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    }_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Main.scene.prototype.Load _eq_ function()_lt_/div_gt__lt_div_gt_{_lt_/div_gt__lt_div_gt_if (!BABYLON.Engine.isSupported()) {_lt_/div_gt__lt_div_gt_            window.alert(_t_Browser not supported_t_)_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_else {_lt_/div_gt__lt_div_gt_console.log(this.canvas)_sm__lt_/div_gt__lt_div_gt_            this.engine _eq_ new BABYLON.Engine(this.canvas_co_ true)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            this.scene _eq_ new BABYLON.Scene(this.engine)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            this.Mesh()_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            window.addEventListener(_qt_resize_qt__co_ function () {_lt_/div_gt__lt_div_gt_                _this.engine.resize()_sm__lt_/div_gt__lt_div_gt_            })_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            this.scene.executeWhenReady(function () {_lt_/div_gt__lt_div_gt_                _this.Basic()_sm__lt_/div_gt__lt_div_gt__this.engine.runRenderLoop(function () {               _lt_/div_gt__lt_div_gt__this.container.innerHTML _eq_ _qt_babylon.js _dd_ _qt_ + _this.engine.getFps().toFixed(0) + _qt_ fps_qt_ + _qt_&lt_sm_br&gt_sm__qt__sm__lt_/div_gt__lt_div_gt__this.loop()_sm__lt_/div_gt__lt_div_gt__this.scene.render()_sm__lt_/div_gt__lt_div_gt_            })_sm__lt_/div_gt__lt_div_gt_            })_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            _lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_}_sm__lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Main.scene.prototype.Mesh _eq_ function()_lt_/div_gt__lt_div_gt_{        _lt_/div_gt__lt_div_gt_this.frame _eq_ 0_sm__lt_/div_gt__lt_div_gt_        this.dummies _eq_ []_sm__lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_        var index _eq_ 0_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        for (var prop in DataJson.data.Data[0]) {_lt_/div_gt__lt_div_gt_            // result +_eq_ objName + _qt_._qt_ + prop + _qt_ _eq_ _qt_ + obj[prop] + _qt_\\n_qt__sm__lt_/div_gt__lt_div_gt_            if (prop _eq__eq_ _qt_time_qt_)_lt_/div_gt__lt_div_gt_                continue_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            if (index _eq__eq_ 3) {_lt_/div_gt__lt_div_gt_                console.log(prop)_sm__lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ 0.2_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_FootRight_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_FootLeft_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_HandRight_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_            } else if (prop _eq__eq_ _qt_HandLeft_qt_) {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .1_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_            } else {_lt_/div_gt__lt_div_gt_                var mesh _eq_ BABYLON.Mesh.CreateBox(_qt__qt__co_ .05_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_           _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            mesh.position.x _eq_ DataJson.data.Data[0][prop].x_sm__lt_/div_gt__lt_div_gt_            mesh.position.y _eq_ DataJson.data.Data[0][prop].y_sm__lt_/div_gt__lt_div_gt_            mesh.position.z _eq_ DataJson.data.Data[0][prop].z_sm__lt_/div_gt__lt_div_gt_            this.dummies.push(mesh)_sm__lt_/div_gt__lt_div_gt_            index++_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    }_sm__lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Main.scene.prototype.Basic _eq_ function() {_lt_/div_gt__lt_div_gt_        // backgournd color_lt_/div_gt__lt_div_gt_        this.scene.clearColor _eq_ new BABYLON.Color3(.1_co_ .1_co_ .1)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        //light_lt_/div_gt__lt_div_gt_        var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        //camera_lt_/div_gt__lt_div_gt_        this.camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 1_co_0.8_co_ 35_co_ new BABYLON.Vector3(15_co_ 15_co_ 15)_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_        this.camera.setPosition(new BABYLON.Vector3(0_co_ 15_co_ -30))_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        this.camera.lowerBetaLimit _eq_ 5_sm__lt_/div_gt__lt_div_gt_        this.camera.upperBetaLimit _eq_ (Math.PI / 2) * .95_sm__lt_/div_gt__lt_div_gt_   _lt_/div_gt__lt_div_gt_// Camera 1 (right side)_lt_/div_gt__lt_div_gt_var camera1 _eq_ new BABYLON.ArcRotateCamera(_qt_camera1_qt__co_ 0_co_ Math.PI/2_co_ 20_co_ new BABYLON.Vector3(0_co_7_co_0)_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_this.scene.activeCameras.push(camera1)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Camera 2 (left side)_lt_/div_gt__lt_div_gt_var camera2 _eq_ new BABYLON.ArcRotateCamera(_qt_camera2_qt__co_ -Math.PI/2_co_ Math.PI/2_co_ 20_co_ new BABYLON.Vector3(0_co_7_co_0)_co_ this.scene)_sm__lt_/div_gt__lt_div_gt_this.scene.activeCameras.push(camera2)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Viewports_lt_/div_gt__lt_div_gt_camera1.viewport _eq_ new BABYLON.Viewport(0.5_co_ 0_co_ 0.5_co_ 1.0)_sm_ // right_lt_/div_gt__lt_div_gt_camera2.viewport _eq_ new BABYLON.Viewport(0.0_co_ 0_co_ 0.5_co_ 1.0)_sm_ // left_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_// Camera control_lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_this.scene.activeCameras[0] _eq_ camera1_sm__lt_/div_gt__lt_div_gt_this.scene.activeCameras[0].attachControl(this.canvas_co_ true)_sm__lt_/div_gt__lt_div_gt_    }_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    Main.scene.prototype.loop _eq_ function ()_lt_/div_gt__lt_div_gt_{_lt_/div_gt__lt_div_gt_        var index _eq_ 0_sm__lt_/div_gt__lt_div_gt_        for (var prop in DataJson.data.Data[this.frame]) {_lt_/div_gt__lt_div_gt_            if (prop _eq__eq_ _qt_time_qt_)_lt_/div_gt__lt_div_gt_                continue_sm__lt_/div_gt__lt_div_gt_            this.dummies[index].position.x _eq_ DataJson.data.Data[this.frame][prop].x_sm__lt_/div_gt__lt_div_gt_            this.dummies[index].position.y _eq_ DataJson.data.Data[this.frame][prop].y_sm__lt_/div_gt__lt_div_gt_            this.dummies[index].position.z _eq_ DataJson.data.Data[this.frame][prop].z_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            index++_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        this.frame++_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        console.log(this.frame)_sm__lt_/div_gt__lt_div_gt_    }_sm__lt_span_gt_ _lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_})()_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-26T17:16:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Le code est difficilement lisible comme ca. il faudrait utiliser la balise BBCode _qt_&lt_sm__qt_ _qt_&gt_sm__qt_ pour y voir plus claire ou le mettre sur le playground pour mieux le debugger._lt_/p_gt__lt_p_gt_Et j_t_ai pas vraiment compris la question par _qt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_avoir un gros plan rapprocher_qt_._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Est oui on peut dire qu_t_il y a beaucoup de français ici (pour les 50% je sais pas_co_ mais on est pas loin)_co_ mais il y a aussi des anglais_co_ américain_co_ allemand_co_ chinois_co_ indien (j_t_en oublie surement)..... bref_co_ c_t_est international d_t_ou le faites que l_t_on écrit avec la langue internationale. mais il m_t_arrive moi aussi d’écrire en français quand j_t_ai du mal a me faire comprendre en anglais._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2015-02-27T13:54:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi !!!!  What i am trying to do_co_ it_t_s to have my model in each viewport center to the screen. Right now they are at the bottom of my screen.  I want to have them bigger and at the center of the viewport.  A little bit like in Blender when you are in camera view and the model is all what you can see in the camera view when you press 0...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_here_t_s the file of my work _dd__lt_a href_eq__qt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xbkVBUlpDTHhrUEk&amp_sm_usp_eq_sharing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/folderview?id_eq_0B_ZBy6q5jS8xbkVBUlpDTHhrUEk&amp_sm_usp_eq_sharing_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanx_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Benoit_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]