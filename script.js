

// دالة Runner 1
//function runner1(baton) {
    //return baton + "-> GO";  // اضافة go
//}
function runner1(baton) {
    return "GO -> " + baton;  // إضافة GO في البداية
}
// عكس نص عن طريق لوب
function runner2(baton) {
    let reverses = '';
    for (let i = baton.length - 1; i >= 0; i--) {
       reverses += baton[i];  // إضافةحرف حرف من نص المعكوس  
    }
    return reverses;  // يرجع النص بعد انعكاسة
}
// تحويل كل حرف صغير الى حرف كبير
function runner3(baton) {
    var upperBaton = '';
    for (let i = 0; i < baton.length; i++) {
       let char = baton[i];
        if (char >= 'a' && char <= 'z') {
            upperBaton += String.fromCharCode(char.charCodeAt(0) - 32);  // تحويل الحروف الصغيرة الى كبيرة
        } else {
            upperBaton += char;  
        }
    }
    return upperBaton;  // إرجاع النص بالحروف الكبيرة
}

//replace
function runner4(baton) {
    let result = '';
    for (let i = 0; i < baton.length; i++) {
        if (baton[i] === ' ') { //يشيك اذا اكو مسافة 
            result += '_';  // يحولها الى _
        } else {
            result += baton[i];//اذا حروف تبقى
        }
    }
    return result;  // إرجاع النص بعد استبدال المسافات
}

// دالة startRaceFromInput
function startRaceFromInput() {
    var initialBaton = document.getElementById("inputText").value;  //اضافة تيكست لادخال
    if (initialBaton === "") {
        document.getElementById("result").textContent = " enter text"; 
        return;
    }
  
    let baton = runner1(initialBaton);   // اضافة go الى النص
            baton = runner2(baton);;  //فحص تيكست  وعكس نص 
    baton = runner3(baton);            // تحويلة الى upper
    baton = runner4(baton);            // تحويلة الى _
    // عرض النتيجة 
    document.getElementById("result").textContent = baton;  
}

function swapNames() {
  
   let input = document.getElementById("inputText").value.trim();  
    // إذا كان النص فارغًا أو يحتوي على أكثر من كلمتين
    if (input === "") {
        document.getElementById("result").textContent = "يرجى إدخال الكلمتين بينهما فاصلة.";
        return;
    }
    
    let names = input.split(" ");

    // التأكد من أن النص يحتوي على كلمتين فقط
    if (names.length !== 2) {
        document.getElementById("result").textContent = "يرجى إدخال كلمتين فقط بينهما مسافة";
        return;
    }

    let result = names[1] + " " + names[0]; 
  
    document.getElementById("result").textContent = result;
}