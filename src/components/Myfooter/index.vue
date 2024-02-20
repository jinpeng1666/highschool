<template>
  <div class="myfooter">
    <div class="left">
      <dl>
        <dt>
          联系
        </dt>
        <dd>
          <i class="el-icon-message"> 3214423826@qq.com</i>
        </dd>
      </dl>    
    </div>
    <div class="right">
      <dl>
        <dt>
          连接
        </dt>
        <dd>
          <a href="https://github.com/jinpeng1666/highschool.git"><i class="el-icon-user-solid"> github仓库</i></a>    
        </dd>
      </dl>      
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'myfooter'
}
</script>

<style scope lang="less">
  .myfooter {
    display: flex;
    height: 100%;

    .left {
      flex: 1;

      dl dt {
      font-size: 18px;
      font-weight: 700;
    }
    };

    .right {
      flex: 1;

      dl dt {
      font-size: 18px;
      font-weight: 700;
    }
    };

    // 图标的样式
    [class^="el-icon-"]::before {
      font-size: 900;
    }
  }
</style>