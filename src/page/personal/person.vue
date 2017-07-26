<template>
  <div id="mine_layout">
        <!--登录框-->
		 <div class="register">
            <!--登录框-->

            <div class="wrap">
                <div class="icon iconfont icon-yonghutouxiang"></div>
                <div class="content">
                    <div class="fl">
                        <p class="login">登录/注册</p>
                        <p class="morepower">登录后享受更多特权</p>
                    </div>
                    <span class="icon iconfont icon-xiangyou"></span>
                </div>
            </div>
			 <!--积分与优惠-->
			 <div class="option">
				 <a href="javascript:;">
					 <p>1000分</p>
					 <p>我的积分</p>
				 </a>
				 <a href="javascript:;">
					 <p>10张</p>
					 <p>优惠</p>
				 </a>
                  <a href="javascript:;">
					 <p>1100元</p>
					 <p>余额</p>
				 </a>
			 </div>
		 </div>


	 <!--选项卡-->
	<div class="tab">
		<ul>
			<li><i class="icon iconfont icon-minedingdan"></i><a href="javascript:;">我的订单</a><span class="icon iconfont icon-xiangyou"></span></li>
			<li><i class="icon iconfont icon-gouwudai2"></i><a href="javascript:;">我的订单积分商城</a><span class="icon iconfont icon-xiangyou"></span></li>
			<li><i class="icon iconfont icon-m-members"></i><a href="javascript:;">饿了么会员</a><span class="icon iconfont icon-xiangyou"></span></li>

		</ul>
		<ul>
			<li><i class="icon iconfont icon-dianpu"></i><a href="javascript:;">服务中心</a><span class="icon iconfont icon-xiangyou"></span></li>
			<li><i class="icon iconfont icon-elmyhq"></i><a href="javascript:;">下载饿了么APP</a><span class="icon iconfont icon-xiangyou"></span></li>
        </ul>
	</div>

 </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
#mine_layout{
    .register{
        .wrap{
            display: flex;
            font-size: 14/20rem;
            text-align: center;
            background-color: #3190E8;
            padding: .666667rem .6rem;
            .iconfont{
                width:2.5rem;
                height: 2.5rem;
                font-size: 45/20rem;
                color: white;
            }
            .content{
                flex: 4;
                text-align: left;
                display: flex;
               .fl{
                   flex: 7;
                   margin-left: .48rem;
                   padding-top: 10/20rem;
                   p{
                        color: white;
                        
                    }
               }
               span{
                flex: 1;
                font-size: 14/20rem;
                padding-top: 20/20rem;
                }
            }
            
        }
        .option{
           display: flex;
           background-color: white;
           a{
               flex: 1;
               text-align: center;
               box-sizing: border-box;
               border-right: 1px solid #F1F1F1;
               p:nth-of-type(1){
                   font-size: 1rem;
                    color: #333;
                    padding: .853333rem 0 .453333rem;
               }
               p:nth-of-type(2){
                   font-size: .55rem;
                    color: #333;
                    padding: .853333rem 0 .453333rem;
               }
           }
           a:nth-of-type(3){
                border-right:none;
           }
        }
    }
    .tab{
        
        ul{
            background-color: white;
            li{
                padding: .433333rem .266667rem .433333rem 0;
                border-bottom: 1px solid #F1F1F1;
                display: flex;
                i{
                    flex: 1;
                    text-align: center;
                }
                a{
                    font-size: .6rem;
                    flex: 7;
                }
                span{
                   color: #BFBFBF;
                }
            }
        }
        ul:nth-of-type(1){
            margin-top: 10/20rem;
        }
        ul:nth-of-type(2){
            margin-top: 10/20rem;
        }
    }
}
</style>




