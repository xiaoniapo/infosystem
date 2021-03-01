import Vue from "vue";
import mesAlert from "./components/MesaAert.vue";

const Toast = Vue.extend(mesAlert);

const alert = ({
    msg,
    type
}) => {
    const toast = new Toast({
        data() {
            return {
                msg,
                type,
            }
        },
        el: document.createElement("div")
    });
    document.body.appendChild(toast.$el);
    setTimeout(() => {
        toast.show = false;

    }, 2000);
    setTimeout(() => {
        toast.exist = false;
    }, 2500);

}
export default alert;