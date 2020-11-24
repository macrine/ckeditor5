import plugin from "@ckeditor/ckeditor5-core/src/plugin";
import {toWidget} from "@ckeditor/ckeditor5-widget/src/utils";

export default class H5VideoEditing extends plugin {
    init() {
        console.log('h5video init');

        this._defineSchema();
        this._defineConverters();
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('h5video', {
            isObject: true,
            allowWhere: '$block',
            allowAttributes: [ 'videoURL']
        });
    }

    _defineConverters() {
        let conversion = this.editor.conversion;


        conversion.for('upcast').elementToElement({
            model: 'h5video',
            view: {
                name: 'video',
                classes: 'h5-video'
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'h5video',
            view: (modelElement, { writer }) => {
                let video = writer.createContainerElement('video', {
                    'src':'https://www.w3school.com.cn/i/movie.ogg',
                    class: 'ss'
                });

                return toWidget( video, writer, { label: 'simple box widget' } );
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'h5video',
            view: (modelElement, { writer }) => {
                return writer.createContainerElement('video', {
                    'src':'https://www.w3school.com.cn/i/movie.ogg',
                    'controls':'controls',
                    class: 'ss'
                })
            }
        });
    }

}
