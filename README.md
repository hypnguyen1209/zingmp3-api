<p align="center">
  <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/icon_zing_mp3_60.png" alt="Zingmp3 Logo"/>
</p>

# Welcome to zingmp3-api 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> ZingMP3 API simple

### 🏠 [Homepage](https://zingmp3-api.herokuapp.com/)

#### Lấy thông tin của bài hát:
```C
// https://zingmp3.vn/bai-hat/Sao-Em-Lai-Tat-May-Pham-Nguyen-Ngoc-Vanh-B/ZO0FW0Z8.html

https://zingmp3-api.herokuapp.com/info?id=ZO0FW0Z8
https://zingmp3-api.herokuapp.com/info?url=https://zingmp3.vn/bai-hat/Sao-Em-Lai-Tat-May-Pham-Nguyen-Ngoc-Vanh-B/ZO0FW0Z8.html
```
#### Lấy link download: 
```C
// https://zingmp3.vn/bai-hat/Sao-Em-Lai-Tat-May-Pham-Nguyen-Ngoc-Vanh-B/ZO0FW0Z8.html

https://zingmp3-api.herokuapp.com/song?id=ZO0FW0Z8
https://zingmp3-api.herokuapp.com/song?url=https://zingmp3.vn/bai-hat/Sao-Em-Lai-Tat-May-Pham-Nguyen-Ngoc-Vanh-B/ZO0FW0Z8.html
```

#### Lấy link download (version beat): 
```C
// https://zingmp3.vn/bai-hat/Sao-Em-Lai-Tat-May-Pham-Nguyen-Ngoc-Vanh-B/ZO0FW0Z8.html

https://zingmp3-api.herokuapp.com/song-beat?id=ZO0FW0Z8
https://zingmp3-api.herokuapp.com/song-beat?url=https://zingmp3.vn/bai-hat/Sao-Em-Lai-Tat-May-Pham-Nguyen-Ngoc-Vanh-B/ZO0FW0Z8.html
```


#### Lấy thông tin của album:
```C
// https://zingmp3.vn/album/Rap-Viet-Ngay-Nay-Various-Artists/ZE7BW00W.html

https://zingmp3-api.herokuapp.com/album?id=ZO0FW0Z8
https://zingmp3-api.herokuapp.com/album?url=https://zingmp3.vn/album/Rap-Viet-Ngay-Nay-Various-Artists/ZE7BW00W.html
```

#### Lấy thông tin của top 100 ZingMP3
```C
https://zingmp3-api.herokuapp.com/top100
```

#### Lấy thông tin của thể loại album:
```C
https://zingmp3-api.herokuapp.com/albums
```

#### Lấy thông tin của video (bao gồm link video):
```C
// https://zingmp3.vn/video-clip/Khong-The-Cung-Nhau-Suot-Kiep-Zing-Music-Awards-2020-Hoa-Minzy/ZOW9IA96.html
https://zingmp3-api.herokuapp.com/video?id=ZOW9IA96
https://zingmp3-api.herokuapp.com/video?url=https://zingmp3.vn/video-clip/Khong-The-Cung-Nhau-Suot-Kiep-Zing-Music-Awards-2020-Hoa-Minzy/ZOW9IA96.html
```

### ✨ [Demo](https://zingmp3-api.herokuapp.com/)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Author

👤 **hypnguyen1209**

* Website: hypnguyen.com
* Github: [@hypnguyen1209](https://github.com/hypnguyen1209)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](./issues). You can also take a look at the [contributing guide](./graphs/contributors).

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_