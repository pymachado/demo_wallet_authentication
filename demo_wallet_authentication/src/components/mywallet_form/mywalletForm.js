
export default function MyWalletForm ({currentAddress}) {
    return (
        <input class="form-control" type="text" value= {currentAddress} aria-label="readonly input example" readonly></input>
    )
}