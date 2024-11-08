
export default function ConnectButton ({state, requestToConnect}) {
    return (
        <div class="d-grid gap-2 col-6 mx-auto">
        <button 
        class="btn btn-primary" 
        type="button"
        onClick={requestToConnect}    
        >{state}</button>
        </div>
    );
}