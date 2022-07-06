<template>
  <div>
    <div id="rita"></div>
  </div>
</template>
<script>
export default {
  methods: {
    ringbaRita(){
      (function(e,d) {
        var ringba_com_tag="JSffb0e143ba4840eaacf1bb21bb879a6d";
        var _sc = d.getElementsByTagName('script'),
            _s = _sc[_sc.length - 1];
        e._rgba = e._rgba || { q: [] };
        e._rgba.q.push({
          tag: ringba_com_tag,
          script: _s
        });
        if (!(e._rgba.loading = !!e._rgba.loading)) {
          var sc = d.createElement('script');
          sc.type = 'text/javascript';
          sc.async = true;
          sc.src = '//js.callcdn.com/js_v3/min/ringba.com.js';
          var s = d.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(sc, s);
          e._rgba.loading = true;
          setTimeout(()=>{
            console.dir(e);
          }, 1000);
        }
      })(window,document);
    }
  },
  mounted(){
    // if(this.$route.query.sub1){
    //   if(this.$route.query.sub1 == 50) this.phone = this.ringbaRita()
    //   if(this.$route.query.sub1 == 13) this.phone = this.ringbaMatt()
    // }
    this.ringbaRita()
  }
}
</script>