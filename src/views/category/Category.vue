<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>aa1</li>
      <li>aa2</li>
      <li>aa3</li>
      <li>aa4</li>
      <li>aa5</li>
      <li>aa6</li>
      <li>aa7</li>
      <li>aa8</li>
      <li>aa9</li>
      <li>aa10</li>
      <li>aa11</li>
      <li>aa12</li>
      <li>aa13</li>
      <li>aa14</li>
      <li>aa15</li>
      <li>aa16</li>
      <li>aa17</li>
      <li>aa18</li>
      <li>aa19</li>
      <li>aa20</li>
      <li>aa21</li>
      <li>aa22</li>
      <li>aa23</li>
      <li>aa24</li>
      <li>aa25</li>
      <li>aa26</li>
      <li>aa27</li>
      <li>aa28</li>
      <li>aa29</li>
      <li>aa30</li>
      <li>aa31</li>
      <li>aa32</li>
      <li>aa33</li>
      <li>aa34</li>
      <li>aa35</li>
      <li>aa36</li>
      <li>aa37</li>
      <li>aa38</li>
      <li>aa39</li>
      <li>aa40</li>
      <li>aa41</li>
      <li>aa42</li>
      <li>aa43</li>
      <li>aa44</li>
      <li>aa45</li>
      <li>aa46</li>
      <li>aa47</li>
      <li>aa48</li>
      <li>aa49</li>
      <li>aa50</li>
      <li>aa51</li>
      <li>aa52</li>
      <li>aa53</li>
      <li>aa54</li>
      <li>aa55</li>
      <li>aa56</li>
      <li>aa57</li>
      <li>aa58</li>
      <li>aa59</li>
      <li>aa60</li>
      <li>aa61</li>
      <li>aa62</li>
      <li>aa63</li>
      <li>aa64</li>
      <li>aa65</li>
      <li>aa66</li>
      <li>aa67</li>
      <li>aa68</li>
      <li>aa69</li>
      <li>aa70</li>
      <li>aa71</li>
      <li>aa72</li>
      <li>aa73</li>
      <li>aa74</li>
      <li>aa75</li>
      <li>aa76</li>
      <li>aa77</li>
      <li>aa78</li>
      <li>aa79</li>
      <li>aa80</li>
      <li>aa81</li>
      <li>aa82</li>
      <li>aa83</li>
      <li>aa84</li>
      <li>aa85</li>
      <li>aa86</li>
      <li>aa87</li>
      <li>aa88</li>
      <li>aa89</li>
      <li>aa90</li>
      <li>aa91</li>
      <li>aa92</li>
      <li>aa93</li>
      <li>aa94</li>
      <li>aa95</li>
      <li>aa96</li>
      <li>aa97</li>
      <li>aa98</li>
      <li>aa99</li>
      <li>aa100</li>
    </ul>
  </div>
</template>
<script>
// 引入滚动插件
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 调用使用
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpload: true
    });

    this.scroll.on('scroll', (position) => {
      console.log(position)
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
    })
  },
  methods: {
    btnClick() {
      console.log('btnclick');
    }
  }
};
</script>

  <style scoped>
.wrapper {
  height: 200px;
  background: cornflowerblue;
  overflow: hidden;
}
</style>