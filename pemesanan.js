// function hitung_paket(){
//     var harga = document.getElementById('paket');
//     var paket = harga.options[harga.selectedIndex].value;
//     var jumlah = document.getElementById('jumlah').value;
//     var harga_paket = document.getElementById('harga_paket');
//     var total_bayar = document.getElementById('total_bayar');
    
//     if (paket == 'paket' || jumlah == '' || jumlah == 0){
//         harga = 0;
//         alert('Silahkan isi Data dengan Benar!!!');
//     }
//     else if (paket == 'agr'){cost=40000;}
//     else if (paket == 'ur'){cost=40000;}
//     else if (paket == 'rt'){cost=30000;}
//     else if (paket == 'rp'){cost=30000;}
//     else if (paket == 'rg'){cost=40000;}
//     else if (paket == 'ral'){cost=40000;}
//     harga_paket.value = (cost);
//     total_bayar.value = (jumlah)*(cost); 
    
// }   

function cnfrm(){
    var jumlah = document.getElementById('jumlah').value;
    var harga = 25000;
    var total_bayar = document.getElementById('total_bayar');
    total_bayar.value = (jumlah)*(harga); 
    
}   

function sendWhatsapp(){
    var url     = "www.abcd.com/?name=" + name;
    var sMsg    = encodeURIComponent( "hi this is " + name + " and my link is " + url );
    var whatsapp_url = "whatsapp://send?text=" + sMsg;
    window.location.href = whatsapp_url;
}