
set ns [new Simulator]

#set tr [ open "out.tr" w]
#$ns trace-all $tr

set  ftr [ open "out.nam" w]
$ns namtrace-all $ftr

proc end { } {
	global ns ftr 
	$ns flush-trace 
	close $ftr 
	exec nam out.nam &
	exit 0
	 
	}

$ns color 1 Blue
$ns color 2 Red

# Create two nodes
set ns0 [$ns node]
set ns1 [$ns node]
set ns2 [$ns node]
set ns3 [$ns node]

# Create a simple link between the nodes
$ns duplex-link $ns3 $ns1 1mb 50ms DropTail
$ns duplex-link $ns0 $ns1 1mb 50ms DropTail
$ns duplex-link $ns1 $ns2 1mb 50ms DropTail

$ns duplex-link-op $ns3 $ns1 orient right-down
$ns duplex-link-op $ns0 $ns1 orient right-up
$ns duplex-link-op $ns1 $ns2 orient right

set udp [new Agent/UDP]
$udp set class_ 1
$ns attach-agent $ns0 $udp

set sink [new Agent/Null]
$ns attach-agent $ns2 $sink
$ns connect $udp $sink

set tcp [new Agent/TCP]
$tcp set class_ 2
$ns attach-agent $ns3 $tcp

set tcpsink [new Agent/TCPSink]
$ns attach-agent $ns2 $tcpsink

$ns connect $tcp $tcpsink

set ftp [new Application/FTP]
$ftp attach-agent $tcp

set cbr [new Application/Traffic/CBR]
$cbr attach-agent $udp



$ns at 1 "$cbr start"
$ns at 1.2 "$ftp start"
$ns at 3 end

$ns run
 
