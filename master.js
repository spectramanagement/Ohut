// Receive receipts from user end
// For demonstration purposes, we'll just log the receipt
function receiveReceipt(receipt) {
    console.log(`Receipt received: ${receipt}`);
    const receiptsList = document.getElementById('receipts-list');
    const li = document.createElement('li');
    li.textContent = `Receipt: ${receipt}`;
    receiptsList.appendChild(li);
}

// Receive withdrawal requests from user end
// For demonstration purposes, we'll just log the amount
function receiveWithdrawalRequest(amount) {
    console.log(`Withdrawal request: ${amount}`);
    const withdrawalsList = document.getElementById('withdrawals-list');
    const li = document.createElement('li');
    li.textContent = `Withdrawal request: ${amount}`;
    withdrawalsList.appendChild(li);
}

// Approve receipt
function approveReceipt(receipt) {
    // Increase user's available balance
    // For demonstration purposes, we'll just log the approval
    console.log(`Receipt approved: ${receipt}`);
}

// Approve withdrawal
function approveWithdrawal(amount) {
    // Send notification to user end
    // For demonstration purposes, we'll just log the approval
    console.log(`Withdrawal approved: ${amount}`);
}