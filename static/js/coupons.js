$(function () {

    /**
     * 初始化DOM节点
     *
     * ；
     */
    var $COUPONS = {};

    /**
    * 初始化获取列表页条件
    */
    var dropBox = $(".drop-box"),
        localUrl = location.pathname + window.location.search,
        pageSize = 6, // 每页数据条数
        filterObj = { currPage: 1, pageSize: pageSize }; // 定义一个对象用于存储筛选条件,默认筛选为翻页第一页
    if (from === 'member') filterObj.couponStatus = 'able'; //传入选择列表类型 {able:可用券 || all全部}

    /**
     * 初始化下拉加载插件；
     */
    var dropload = dropBox.dropload({
        scrollArea: window,
        loadDownFn: filterFn
    });


    if (from === 'member') {
        $COUPONS.searchTab = $('#search_tab');
        $COUPONS.tabLists = $COUPONS.searchTab.find('li');

        $COUPONS.tabLists.on('click', function () {
            var _this = $(this);
            var _type = _this.data('div');
            _this.addClass('on').siblings().removeClass('on');
            filterObj.couponStatus = _type === 'all' ? '' : 'able';
            couponsInit() //重置列表数据
        });
    } else {
        if (productType && productCode) {
            filterObj.productType = productType;
            filterObj.productCode = productCode;
        }
    }


    function couponsInit() {
        localUrl = location.pathname;
        filterObj.currPage = 1;
        unLockDropload();
        filterFn(dropload, 1);
    }

    /**
     * 获取当前页的数据
     * @param startPage
     */
    function filterFn(dropload, startPage) {
        console.log(localUrl);
        $.ajax({
            type: 'POST',
            url: localUrl,
            data: filterObj,
            dataType: 'json',
            success: function (data) {
                if (data !== 'error' && data[0].flag !== 'error') {
                    //检测登录状态
                    if (data[0].status === 400) {
                        window.location.href = '/login?redir=' + window.location.pathname + window.location.search;
                    }

                    var results = data[0].data;
                    console.log(results);
                    console.log(results.rows);

                    if (startPage) {
                        dropBox.find('ul').html(listDom(results.rows, from));
                    } else {
                        dropBox.find('ul').append(listDom(results.rows, from));
                    }
                    //filterObj.currPage = +(results.curPage) + 1;
                    filterObj.currPage += 1;

                    if (filterObj.currPage > results.pages) {
                        dropload.lock();
                        dropload.noData();
                    }
                } else {
                    dropload.lock();
                    dropload.noData();
                }
                // 每次数据加载完，必须重置
                dropload.resetload();
            },
            error: function (xhr, type) {
                // 即使加载出错，也得重置
                dropload.resetload();
            }
        });
    }

    /**
     * 解锁dropload
     */
    function unLockDropload() {
        //dropload.resetload();
        dropload.unlock();
        //dropload.noData(false);
        dropload.isData = true;

    }

    /**
     * 初始化DOM列表HTML
     * @param list
     * @param from
     * @returns {string}
     */
    function listDom(list, from) {
        var dom = '',
            len = list.length;
        list = list.reverse();
        while (len--) {
            // if (from === 'member') {
            //     dom += '<li>'
            //         + '<a href="food-order.html">'
            //         + '<span class="coupons_rmb">'
            //         + '<i class="rt_icon"></i><i class="rmb">￥</i>'
            //         + '<span class="price">100</span>'
            //         + '<span class="coupons_condition">满100使用</span>'
            //         + '<span class="text">元优惠券</span>'
            //         + '<i class="coupons_line_dots"></i>'
            //         + '</span>'
            //         + '<div class="coupons_user_limit">'
            //         + '<p>使用有效期：2015-08-08 至 2015-09-08</p>'
            //         + '<p>使用范围：全场通用</p>'
            //         + '</div></a></li>'
            // } else {
            var href = 'javascript:;';
            if (from === 'list') {
                href = '/coupon/detail?couponCode=' + list[len].couponCode;
            } else if (from === 'order') {
                href = '/coupon/detail?couponCode=' + list[len].couponCode;
            }

            if (from === 'member') {
                switch (parseInt(list[len].couponStatus)) {
                    case 2:
                        dom += '<li class="used">'
                        break;
                    case 3:
                        dom += '<li class="overdue">'
                        break;
                    default:
                        dom += '<li>'
                        break;
                }
            } else {
                dom += '<li>'
            }
            dom += '<a href="' + href + '">'
                + '<span class="coupons_rmb">';

            if (from === 'member') dom += '<i class="rt_icon"></i>';
            //优惠劵类型
            if (list[len].couponType === '0') {
                dom += '<em class="coupons_price clearfix">'
                    + '<i class="rmb">￥</i>'
                    + '<span class="price">' + list[len].couponValue + '</span></em>'
                    
            } else if (list[len].couponType === '1') {
                dom += '<em class="coupons_price clearfix">'
                    + '<span class="price">' + list[len].couponValue + '</span>'
                    + '<i class="rmb">折</i></em>'                
            }
            dom += '<em class="coupons_title clearfix">'
                + '<p class="text" >' + list[len].couponName + '</p>'
                + '<p class="coupons_condition">'
                + (list[len].fullcat ? ('满' + list[len].fullcat + '元可用') : '任意金额可用')
                + '</p>'
                + '</em>'
                + '<i class="coupons_line_dots"></i></span>'
                + '<div class="coupons_user_limit">';

            //使用时限标识
            if (from === 'list') {
                switch (list[len].usetimeFlag) {
                    case '0':
                        dom += '<p>使用有效期：' + list[len].usetimeStart.substring(0, 10) + ' 至 ' + list[len].usetimeEnd.substring(0, 10) + ' </p>';
                        break;
                    case '1':
                        dom += '<p>使用有效期：领取当日 ' + list[len].usetimeDay + '天内生效</p>';
                    default:
                        break;
                }
            } else {
                dom += '<p>使用有效期：' + list[len].startTime.substring(0, 10) + ' 至 ' + list[len].endTime.substring(0, 10) + ' </p>';
            }


            var _productFlag = '';
            switch (list[len].productFlag) {
                case '0':
                    _productFlag = '通用';
                    break;
                case '1':
                    _productFlag = '指定产品类别(' + list[len].productValue + ')';
                    break;
                case '2':
                    _productFlag = '指定产品';
                    break;
            }

            dom += '<p>使用范围：' + _productFlag + '</p></div></a></li>';

        }
        return dom;
    }
});

