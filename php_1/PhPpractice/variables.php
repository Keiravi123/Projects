<?php
$nombre = "Ana";
$edad = 17;
$notas = [80, 90, 75];

function promedio($array) {
    $suma = array_sum($array);
    return $suma / count($array);
}

$prom = promedio($notas);

if ($prom >= 70) {
    echo "Aprobado, $nombre";
} else {
    echo "Reprobado, $nombre";
}
?>