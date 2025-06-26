<script lang="ts">
    let { color, pattern, size, opacity, left, top } = $props();
</script>

<div 
    class="circle"
    style:background-color={color}
    style:background-image={pattern ? `url(${pattern})` : 'none'}
    style:width={size ? `${size}vw` : '20vw'}
    style:height={size ? `${size}vw` : '20vw'}
    style:opacity={opacity ? opacity : '1'}
    style:margin-left={left ? `${left}vw` : '0'}
    style:margin-top={top ? `${top}vh` : '0'}
>
</div>

<style>
    .circle {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        overflow: hidden;
        background-size: 100% 100%;
    }
</style>