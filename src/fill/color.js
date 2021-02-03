const color = [
  "#845ec2",
  "#ff5e78",
  "#350b40",
  "#ad6c80",
  "#0a043c",
  "#75cfb8",
  "#eb596e",
  "#af0069",
  "#295939",
  "#83a95c",
  "#845ec2",
  "#ff5e78",
  "#350b40",
  "#ad6c80",
  "#0a043c",
  "#75cfb8",
  "#eb596e",
  "#af0069",
  "#295939",
  "#83a95c"
]

const colorRamdon = () => {
  let aux = Math.floor(Math.random()*color.length);
  return color[aux];
}



export default colorRamdon