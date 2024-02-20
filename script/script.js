// jump buy ticket to select seat
function jumpTo(sectionId) {
    document.location.href = '#' + sectionId;

}

// get clicked seat value 
const seats = document.querySelectorAll('.button')
seats.forEach(seats => {
    seats.addEventListener("click", (event) => {
        const seatName = event.target.innerText;
        selectedSeatById(seatName)
        showCouponField()
        nextButtonDisableEnable()

    })

})


let countButton = 1;
const SeatList = [];
function selectedSeatById(elementId) {
    const selectedSeat = document.getElementById(elementId);
    const selectedSeatName = selectedSeat.innerText;
    if (!SeatList.includes(selectedSeatName) && countButton <= 4) {
        //set seat background 
        setSeatBg(elementId);

        //update seat info
        setSeatInfo(selectedSeatName)

        //update total price
        const totalPrice = getElementNumberById('total-price');
        let updateTotalPrice = totalPrice + 550;
        setElementNumberById('total-price', updateTotalPrice);

        //update grand total
        setElementNumberById('grand-total', updateTotalPrice)

        //update seat number
        const currentSeat = getElementNumberById('seat-left');
        const updateSeat = currentSeat - 1;
        setElementNumberById('seat-left', updateSeat);

        //set total seat
        const sitNumber = getElementNumberById('set-seat-number')
        const updateSeatNumber = sitNumber + 1;
        setElementNumberById('set-seat-number', updateSeatNumber)

        SeatList.push(selectedSeatName)

        countButton++;
    }
    else if (countButton > 4) {
        alert('You cannot take more than four seats!!')
    }

    else {
        alert('Already Selected')
    }
}

//show coupon div when selected 4 seat 
function showCouponField() {
    const showCouponField = document.getElementById('text-field');
    if (SeatList.length === 4) {
        showCouponField.removeAttribute('disabled')
    }
}

//check coupon code and visible check button
document.getElementById('text-field').addEventListener('keyup', function (e) {
    const text = e.target.value;
    const button = document.getElementById('coupon-check-btn')
    if (text === "NEW15" || text == "Couple 20") {
        button.classList.remove('btn-disabled')
    }
})

// checkCoupon code and less grand total 
function checkCoupon() {
    const couponArea = document.getElementById('coupon-area');
    const text = getInputFieldTextById('text-field');
    if (text == 'NEW15') {
        const currentGrand = getElementNumberById('grand-total');
        const discount = currentGrand * 15 / 100;
        discountValueSet(discount);
        const updateGrandTotal = currentGrand - discount;
        setElementNumberById('grand-total', updateGrandTotal);
    }
    else if (text == 'Couple 20') {
        const currentGrand = getElementNumberById('grand-total');
        const discount = currentGrand * 20 / 100;
        discountValueSet(discount);
        const updateGrandTotal = currentGrand - discount;
        setElementNumberById('grand-total', updateGrandTotal);
    }

    else {
        alert('Invalid Coupon')
    }
    couponArea.classList.add('hidden')


}

// discount amount set in coupon section 
function discountValueSet(discountValue) {
    const couponSection = document.getElementById('coupon-section');
    const div = document.createElement('div');
    div.innerHTML = `<div class="text-lg text-green-800 font-bold py-4 flex justify-between">
    <p>Discount:</p> 
    <p>BDT ${discountValue}</p>
    </div>`;
    couponSection.appendChild(div);
    console.log(discountValue)
}

// set seat information 
function setSeatInfo(value) {
    const setSeatText = document.getElementById('set-seat');
    const div = document.createElement('div');
    div.innerHTML = `
    <p class="flex justify-between text-orange-400 mb-2">
    <span>${value}</span>
    <span>Economy</span>
    <span>550</span>
    </p>
    `;

    setSeatText.appendChild(div)
}


//next button enable disable property set
function nextButtonDisableEnable(){
    const btn = document.getElementById('next-btn');
    const phoneNumber=getInputFieldTextById('phone-number');
    const phoneNumberLength=phoneNumber.length;
    if(SeatList.length>0 && phoneNumberLength>0){
        btn.classList.remove('btn-disabled')
    }
    else if(phoneNumberLength==0){
        btn.classList.add('btn-disabled')
    }
    
    
}

//next button disabled when page reload 
window.addEventListener('load',function(){
    const btn = document.getElementById('next-btn');
    btn.classList.add('btn-disabled')

})

//number field keyup
const field= document.getElementById('phone-number').addEventListener('keyup', function (e) {

    nextButtonDisableEnable()

})


function continueAgin(){
    window.location.reload();
}
