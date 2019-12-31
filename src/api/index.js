import axios from "axios";

// axios 有一个公共地址的配置
axios.defaults.baseURL = "http://127.0.0.1:8080/dang/"

axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
// 对响应错误做点什么
    return Promise.reject(error);
});

export function getCateList() {
    // 返回的是一个promise实例对象
    return axios.get("categoryList")
}

export function getMsProduct() {
    // 返回的是一个promise实例对象
    return axios.get("msproduct")
}

export function getBookCateList() {
    return axios.get("bookCateList")
}

// 提交书籍数据
export function postBookinfo(book) {
    const params = new URLSearchParams();
    params.append('name', book.name);
    params.append('author', book.author);
    params.append('desc', book.desc);
    params.append('img', book.img);
    return axios.post("bookinfo", params)
}
