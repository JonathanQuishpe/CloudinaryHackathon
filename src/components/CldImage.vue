<script setup>
import { AdvancedImage, placeholder } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { outline } from "@cloudinary/url-gen/actions/effect";
import { outer } from "@cloudinary/url-gen/qualifiers/outlineMode";

const props = defineProps({
  publicId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  border: {
    type: String,
    default: "#2a3c65",
  },
  text: {
    type: String,
    default: "#cd6f81",
  },
});

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});
const myImage = cld
  .image(props.publicId)
  .effect(outline().mode(outer()).width(100).color(props.border))
  .backgroundColor(props.border)
  //.resize(fill().width(600).height(550).gravity(autoGravity()))
  .overlay(
    source(
      text(props.title, new TextStyle("Creepster", 60)).textColor(props.text)
    ).position(new Position().gravity(compass("south")).offsetY(20))
  )
  .delivery(quality("auto"));
const imageUrl = myImage.toURL();

const plugins = [placeholder()];
</script>

<template>
  <a :href="imageUrl" download target="_blank">
    <AdvancedImage
      :cldImg="myImage"
      style="max-width: 100%"
      :plugins="plugins"
      className="rounded-lg shadow-lg"
    />
  </a>
</template>
