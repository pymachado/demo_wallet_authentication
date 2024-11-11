import './showBalance.css';


export default function ShowBalance({showBalance}) {
    return (
        <h1 class="display-3">The account balance is {showBalance}</h1>
    );
}