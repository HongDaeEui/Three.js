uniform vec3 color;
uniform float opacity;
varying float ampNormalized;
void main() {
  vec3 c = color;
  gl_FragColor = vec4(c, opacity);
}