const bondGroupList = {
    A:[
        {
            payment:7,
            //title:'<h2>缴纳押金<b class="money">199</b>元<span>(可退)</span></h2>',
            title: '交纳押金199元',
            originalPrice: 199,
            isAnnual: false,         // true包年, false押金
            isLimit: 0,              // 0正常、1限时、2限量,
            normalPrice: 199,        // 用于计算按钮实际价格
            saleTitle: ''            // 红色副标题统一由saleTitle配置, 有则显示、空则隐藏; (*)有押金优惠券则副标由_bondSaleOneTitle填充
        }
    ],
    F:[
        {
            payment:300,
            //title: '<h2>缴纳押金<b class="money">99</b>元<span>(<span style="text-decoration: line-through;">原价199</span>,可退)</span></h2>',
            title: '交纳押金99元',
            originalPrice: 99,
            isAnnual: false,
            isLimit: 0,
            nromalPrice: 99,
            saleTitle: '<span style="text-decoration: line-through;">原价199</span>'
        },
    ],
    B:[
        /* 交换位置 */
        {
            payment:7,
            //title:'199元押金',
            title: '交纳押金199元',
            subTitle:'可退',
            default:false,
            isAnnual: false,
            isLimit: 0,
            normalPrice: 199,
            saleTitle: ''
        },
        {
            payment:103,
            title:'99元包一年用车',
            subTitle:'免押金',
            default:true,
            isAnnual: true,
            isLimit: 0,
            normalPrice: 99
        },
    ],
    C:[
        {
            payment:7,
            title:{
                //B1:'199元押金',
                //C1:'199元押金',
                //B2:'199元押金'
                B1:'交纳押金199元',
                C1:'交纳押金199元',
                B2:'交纳押金199元'
            },
            subTitle:{
                B1:'可退',
                C1:'可退',
                B2:'可退'
            },
            originalPrice: 199,
            default:true,
            isAnnual: false,
            isLimit: {
                B1: 0,
                C1: 0,
                B2: 0
            },
            normalPrice: {
                B1: 199,
                C1: 199,
                B2: 199
            },
            saleTitle: {
                B1: '',
                C1: '',
                B2: ''
            }
        },
        {
            payment:102,
            title:{
                B1:'59元包一年用车',
                C1:'59元包一年用车',
                B2:'59元包一年用车'
            },
            subTitle:{
                B1:'免押金',
                C1:'免押金',
                B2:'限时；免押金'
            },
            default:false,
            isAnnul: true,
            isLimit: {
                B1: 0,
                C1: 0,
                B2: 1   // 限时
            },
            normalPrice: {
                B1: 59,
                C1: 59,
                B2: 59   // 限时
            }
        }
    ],
    D:[
        /* 位置交换 */
        {
            payment:300,
            title:'99元押金',
            subTitle:'<span style="text-decoration: line-through;">原价199</span>，押金可退',
            default:true,
            isAnnual: false,
            isLimit: 0,
            normalPrice: 99,
            saleTitle: '<span style="text-decoration: line-through;">原价199</span>'
        },
        {
            payment:103,
            title:'99元包一年用车',
            subTitle:'免押金',
            default:false,
            isAnnul: true,
            isLimit: 0,
            normalPrice: 99
        }
    ],
    E:[
        {
            // 新用户专享，押金可退
            payment:300,
            /* title:{
                A1:'99元押金',
                A2:'99元押金（限时）',
                A3:'99元押金',
                A4:'99元押金（限时）',
                A5:'99元押金（限量）',
            }, */
            title: {
                A1:'交纳押金99元',
                A2:'交纳押金99元',
                A3:'交纳押金99元',
                A4:'交纳押金99元',
                A5:'交纳押金99元',
            },
            subTitle:{
                A1:'新用户专享，押金可退',
                A2:'<span style="text-decoration: line-through;">原价199</span>，押金可退',
                A3:'新用户专享，押金可退',
                A4:'<span style="text-decoration: line-through;">原价199</span>，押金可退',
                A5:'<span style="text-decoration: line-through;">原价199</span>，押金可退',
            },
            originalPrice: 99,
            default:true,
            isAnnual: false,
            isLimit: {
                A1: 0,
                A2: 1,
                A3: 0,
                A4: 1,
                A5: 2,
            },
            normalPrice: {
                A1: 99,
                A2: 99,
                A3: 99,
                A4: 99,
                A5: 99,
            },
            saleTitle: {
                A1:'新用户专享',
                A2:'限时：<span style="text-decoration: line-through;">原价199</span>',
                A3:'新用户专享',
                A4:'限时：<span style="text-decoration: line-through;">原价199</span>',
                A5:'限量：<span style="text-decoration: line-through;">原价199</span>',
            }
        },
        {
            payment:102,
            title:{
                A1:'59元包一年用车',
                A2:'59元包一年用车',
                A3:'59元包一年用车',
                A4:'59元包一年用车',
                A5:'59元包一年用车',
            },
            subTitle:{
                A1:'免押金',
                A2:'免押金',
                A3:'限时；免押金',
                A4:'限时，免押金',
                A5:'限时，免押金',
            },
            default:false,
            isAnnual: true,
            isLimit: {
                A1: 0,
                A2: 0,
                A3: 1,
                A4: 1,
                A5: 1,
            },
            normalPrice: {
                A1: 59,
                A2: 59,
                A3: 59,
                A4: 59,
                A5: 59,
            }
        }
        
    ],
    G:[
        {
            payment:7,
            //title:'<h2>缴纳押金<b class="money">199</b>元<span>(可退)</span></h2>',
            title: '交纳押金199元',
            originalPrice: 199,
            isAnnual: false,
            isLimit: 0,
            normalPrice: 199,
            saleTitle: ''
        }
    ],
    H:[
        {
            payment:300,
            // title:'<h2>缴纳押金<b class="money">99</b>元(限量)<span>(<span style="text-decoration: line-through;padding-left: 0px;">原价199</span>，可退)</span></h2>',
            title: '交纳押金99元',
            originalPrice: 99,
            isAnnual: false,
            isLimit: 2,
            normalPrice: 99,
            saleTitle: '限量：<span style="text-decoration: line-through;padding-left: 0px;">原价199</span>'
        }
    ],
};


export default bondGroupList;