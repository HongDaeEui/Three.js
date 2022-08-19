uniform float size;
uniform float time;
uniform float amplitude;
uniform float waveLength;
varying float ampNormalized;

void main() {
    vec3 p = position;
    float wLength = 1. / waveLength;
    p.y = sin(position.x * wLength + time) * cos(position.z * wLength  + time) * amplitude;
    ampNormalized = abs(- amplitude  + p.y) / (amplitude * 2.);
    vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
    gl_PointSize = size * ( 1000.0 / length( mvPosition.xyz ) );
    gl_Position = projectionMatrix * mvPosition;
}