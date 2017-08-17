### İleti Merkezi

Paketi Kullanmak için ekleyiniz
    meteor add color:iletimerkezi


Sonrasında **iletimerkezi** tarafından size verilen `username`, `password` ve `sender` bilgileri ile sms gönderebilirsiniz.


``` javascript
import { IletiMerkezi } from 'meteor/color:iletimerkezi';

const iletimerkezi = new IletiMerkezi({
  USERNAME: 'XXX', 
  PASSWORD: 'XXX',
  SENDER: 'XXX'
});

iletimerkezi.send('Merhaba55', [5320000000, 5340000000], (code, message) => {
  console.log(code, message) // 200, İşlem başarılı
})
```
