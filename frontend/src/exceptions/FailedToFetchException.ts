import { toast } from 'react-toastify';

export default class FailedToFetchException extends Error{
    /**
     *
     */
    constructor(message:string) {
        super(message);
    }

    notifyError = ()=>{
        toast.error(`${this.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
}
