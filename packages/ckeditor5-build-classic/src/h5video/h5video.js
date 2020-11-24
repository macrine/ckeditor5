import plugin from "@ckeditor/ckeditor5-core/src/plugin";
import H5VideoEditing from "./h5video_editing";
import H5VideoUI from "./h5video_ui";


export default class H5Video extends plugin {
    static get requires() {
        return [ H5VideoEditing, H5VideoUI ];
    }
}
