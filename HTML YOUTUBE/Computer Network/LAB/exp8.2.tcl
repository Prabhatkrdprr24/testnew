# Create a new simulation object
set ns [new Simulator]

set tr [ open "out.tr" w]
$ns trace-all $tr

set  ftr [ open "out.nam" w]
$ns namtrace-all $ftr

# Create two nodes
set ns1 [$ns node]
set ns2 [$ns node]

$ns1 shape box 
$ns1 color blue

$ns2 color red

$ns color 1 Red
$ns color 2 Blue
$ns color 3 Green


# Create a simple link between the nodes
$ns duplex-link $ns1 $ns2 1Mb 1ms DropTail

set tcp1 [new Agent/TCP]
set sink [new Agent/TCPSink]
$ns attach-agent $ns1 $tcp1
$ns attach-agent $ns2 $sink
$ns connect $tcp1 $sink

$tcp1 set fid_ 2

set ftp [new Application/FTP]

$ftp attach-agent $tcp1

proc finish { } {
	global ns tr ftr 
	$ns flush-trace 
	close $tr
	close $ftr 
	exec nam out.nam &
	exit
	 
	}


$ns at .1 "$ftp start"
$ns at 2.0 "$ftp stop"

$ns at 2.1 "finish"

$ns run
 
