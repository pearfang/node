layui.config({
   base:'../js/lib/' //layui自定义layui组件目录
}).extend({
	larry:'larry',
	navtab:'navtab',
	elemnts:'elements',
	common: 'common'
});
layui.use(['layer','elements','form'],function(){
    var layer = layui.layer,
         elements = layui.elements(),
        form = layui.form;
   
   // header信息
   // <b>{城市}天气</b> {天气} {夜间气温}℃ ~ {白天气温}℃
  $('#weather').leoweather({format: '，{时段}好！<span id="colock">现在时间是：<strong>{年}年{月}月{日}日 星期{周} {时}:{分}:{秒}</strong></span> '});
  
    $('#closeInfo').on('click',function(){$('#infoSwitch').hide();});
	

    $('.panel .tools .iconpx-chevron-down').click(function(){
       	   var el = $(this).parents(".panel").children(".panel-body");
       	   if($(this).hasClass("iconpx-chevron-down")){
       	   	   $(this).removeClass("iconpx-chevron-down").addClass("iconpx-chevron-up");
       	   	   el.slideUp(200);
       	   }else{
       	   	   $(this).removeClass("iconpx-chevron-up").addClass("iconpx-chevron-down");
       	   	   el.slideDown(200);
       	   }
    });
    
    // 快捷方式
    $('#shortcut section').on('click',function(){
           var title = $(this).children('.value').find('p').text();
           var href = $(this).children('.value').find('a').data('href');
           var icon = $(this).children('.symbol').find('i:first').data('icon');
           var data = {
                    href: href,
                    icon: icon,
                    title: title
               };
           parent.navtab.tabAdd(data); 
    });

$(window).on('resize',function(){
  var myChart = echarts.init(document.getElementById('larry-seo-stats'));
  option = {
    title: {
      text: '进出口报表',
      subtext: 'demo',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['进口报关单', '出口报关单', '进口台账', '出口台账']
    },
    series: [{
       name: '进出口报表',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 335,
        name: '进口报关单'
      }, {
        value: 310,
        name: '出口报关单'
      }, {
        value: 234,
        name: '进口台账'
      }, {
        value: 1683,
        name: '出口台账'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  myChart.setOption(option);
}).resize();


 form.render();
});



