export function updateBalance(num, transactions){
    let saldo = num;

    for (let i = 0; i < transactions.length; i++) {
        saldo += transactions[i];
    }
    return saldo;
}