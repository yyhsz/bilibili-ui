import IzDialog from './IzDialog.vue'
import { createApp, h } from 'vue'
const openDialog = (options) => {
    const { title, content,closeOnClickOverlay,confirm } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const dialog = createApp({
        render() {
            return h(IzDialog, {
                visible: true,
                'onUpdate:visible': (newValue) => { 
                    if(!newValue){
                        dialog.unmount(div)
                        div.remove()
                    }
                },
                closeOnClickOverlay,
                confirm
            }, { title, content })
        }
    })
    dialog.mount(div)
}
export { openDialog }