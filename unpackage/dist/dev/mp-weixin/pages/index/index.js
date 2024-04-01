"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      picture: [
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg" },
        { id: "2", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg" },
        { id: "3", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg" },
        { id: "4", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg" },
        { id: "5", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg" }
      ]
    };
  },
  onload() {
  },
  methods: {
    OnPreViewImage(url) {
      common_vendor.index.previewImage({
        urls: this.picture.map((v) => v.url),
        //map实例一个对象v并提取v里面的url，也就是映射，这样就可以不影响原始数据
        current: url
        //大图预览
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.picture, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.OnPreViewImage(item.url), item.id),
        b: item.url,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp项目实战/uniapp-pro/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
