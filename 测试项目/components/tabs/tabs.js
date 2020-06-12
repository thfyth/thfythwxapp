// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  
  /**
   * 组件的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:'首页',
        isActive:true
      },
      {
        id:1,
        name:'分类',
        isActive:false
      },
      {
        id:2,
        name:'海鲜',
        isActive:false
      },
      {
        id:3,
        name:'箱包',
        isActive:false
      },
      {
        id:4,
        name:'手拉',
        isActive:false
      },
      {
        id:4,
        name:'伤害',
        isActive:false
      },
    ],
    winWidth: 0,
    winHeight: 0,
    scrollleft:0,
    currentTab: 0, 
  },

  /**
   * 组件的方法列表
   */
  methods: {
/** 
   * 滑动切换tab 
   */
    bindChange: function (e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
          });
  
        this.checkCor();
    },
  
    /** 
     * 点击tab切换 
     */
    swichNav: function (e) {
      var that = this;
      const [index]=that.data.tabs;
      console.log(that)
      console.log(e)
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
  
    checkCor:function(){
      if(this.data.currentTab>4){
        this.setData({
          scrollleft:300
        })
      }else{
        this.setData({
          scrollleft:0
        })
      }
    },
  },


  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      var that = this;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    })
    },
    
  },
})
