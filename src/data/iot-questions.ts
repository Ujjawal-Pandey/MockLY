import type { Question } from "./questions";

// Multi-answer questions store answer as sorted options joined by "||".
export const iotQuestions: Question[] = [
 {
  "id": 1,
  "week": 1,
  "question": "According to the ITU Internet Report 2005 discussed in the lecture, the future Internet is expected to become wider and more complex mainly because:",
  "options": [
   "Humans will completely stop using the Internet",
   "Most Internet traffic may flow between devices and different kinds of things",
   "Only desktop computers will remain connected",
   "Internet communication will be restricted to email services"
  ],
  "answer": "Most Internet traffic may flow between devices and different kinds of things"
 },
 {
  "id": 2,
  "week": 1,
  "question": "Which of the following are characteristics of IoT systems?",
  "options": [
   "Efficient and scalable architecture",
   "Unambiguous naming and addressing",
   "Presence of sleeping nodes, mobile nodes, and non-IP devices",
   "Guaranteed continuous connectivity for every device at all times"
  ],
  "answer": "Efficient and scalable architecture||Presence of sleeping nodes, mobile nodes, and non-IP devices||Unambiguous naming and addressing",
  "multi": true
 },
 {
  "id": 3,
  "week": 1,
  "question": "In the lecture, \"Smart Dust\" refers to:",
  "options": [
   "A cloud storage model for IoT data",
   "A large-scale wireless router used in smart cities",
   "Very tiny computing devices that can be sprayed or injected for sensing purposes",
   "A type of IPv6 address used in IoT networks"
  ],
  "answer": "Very tiny computing devices that can be sprayed or injected for sensing purposes"
 },
 {
  "id": 4,
  "week": 1,
  "question": "Which statement best explains the relation between IoT and M2M communication?",
  "options": [
   "IoT and M2M are exactly the same",
   "M2M is broader than IoT because it includes people and applications",
   "M2M is a part of IoT, while IoT has a broader scope of interactions",
   "IoT does not include machine-to-machine interaction"
  ],
  "answer": "M2M is a part of IoT, while IoT has a broader scope of interactions"
 },
 {
  "id": 5,
  "week": 1,
  "question": "State whether the following statement is True or False.\nStatement: In the Web of Things, IoT sensors are replaced completely by cloud databases.",
  "options": [
   "True",
   "False"
  ],
  "answer": "False"
 },
 {
  "id": 6,
  "week": 1,
  "question": "In an IoT network configuration, local addresses may be valid only within a gateway’s domain. The same local address may even appear under another gateway. The main advantage of this strategy is:",
  "options": [
   "It increases unnecessary address consumption",
   "It helps conserve address space",
   "It removes the requirement of a gateway",
   "It prevents any device from communicating with the Internet"
  ],
  "answer": "It helps conserve address space"
 },
 {
  "id": 7,
  "week": 1,
  "question": "Which of the following functions are associated with IoT gateways in the addressing strategy discussed in the lecture?",
  "options": [
   "Providing Internet connectivity",
   "Supporting IoT LAN intra-connectivity",
   "Obtaining upstream address prefixes using mechanisms such as DHCPv6",
   "Delegating addresses to nodes using SLAAC"
  ],
  "answer": "Delegating addresses to nodes using SLAAC||Obtaining upstream address prefixes using mechanisms such as DHCPv6||Providing Internet connectivity||Supporting IoT LAN intra-connectivity",
  "multi": true
 },
 {
  "id": 8,
  "week": 1,
  "question": "Which of the following is true about IPv6 compared to IPv4?",
  "options": [
   "IPv6 uses dotted decimal notation",
   "IPv6 has a smaller address space than IPv4",
   "IPv6 uses hexadecimal notation and supports a much larger address space",
   "IPv6 requires broadcast addresses in the same way as IPv4"
  ],
  "answer": "IPv6 uses hexadecimal notation and supports a much larger address space"
 },
 {
  "id": 9,
  "week": 1,
  "question": "Which statement correctly represents the design expectation from a good sensor?",
  "options": [
   "It should influence the measured property significantly",
   "It should respond strongly to unrelated physical properties",
   "It should be sensitive to the measured property and should not disturb it",
   "It should always produce random output"
  ],
  "answer": "It should be sensitive to the measured property and should not disturb it"
 },
 {
  "id": 10,
  "week": 1,
  "question": "Which of the following statements about sensor resolution are correct?",
  "options": [
   "Sensor resolution is the smallest change that the sensor can detect",
   "For a digital sensor, resolution is related to the smallest digital output change it can process",
   "Sensor resolution and sensor accuracy always refer to exactly the same property",
   "Sensor accuracy does not depend only on resolution"
  ],
  "answer": "For a digital sensor, resolution is related to the smallest digital output change it can process||Sensor accuracy does not depend only on resolution||Sensor resolution is the smallest change that the sensor can detect",
  "multi": true
 },
 {
  "id": 11,
  "week": 1,
  "question": "State True or False.\nAn accelerometer that measures acceleration along the x, y, and z coordinate axes is classified as a vector sensor.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 12,
  "week": 1,
  "question": "A sensor gives different output for the same input value depending on whether that input was reached by increasing or decreasing the measured quantity. This error is called:",
  "options": [
   "Quantization error",
   "Hysteresis error",
   "IPv6 translation error",
   "Gateway prefix error"
  ],
  "answer": "Hysteresis error"
 },
 {
  "id": 13,
  "week": 1,
  "question": "State True or False.\nA hydraulic actuator can produce considerable force because liquids are nearly incompressible.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 14,
  "week": 1,
  "question": "Which of the following statements are correct about Shape Memory Polymer actuators?",
  "options": [
   "They may respond to stimuli such as light, heat, electrical, magnetic, pH, or moisture changes",
   "They can show high strain recovery",
   "They may have properties such as low density and biocompatibility",
   "They are used only as passive temperature sensors"
  ],
  "answer": "They can show high strain recovery||They may have properties such as low density and biocompatibility||They may respond to stimuli such as light, heat, electrical, magnetic, pH, or moisture changes",
  "multi": true
 },
 {
  "id": 15,
  "week": 1,
  "question": "State whether the following statement is True or False.\nStatement: According to the IoT implementation example discussed in the lecture, data gathered by a sensor travels through a gateway and a proxy server before arriving at the cloud server.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 16,
  "week": 2,
  "question": "In MQTT, which field of a published message is used by the broker as routing information?",
  "options": [
   "Topic",
   "Client identifier",
   "Payload length",
   "Session timer"
  ],
  "answer": "Topic"
 },
 {
  "id": 17,
  "week": 2,
  "question": "Which of the following statements about MQTT topic wildcards are correct?",
  "options": [
   "The plus sign (+) matches an arbitrary value at exactly one hierarchy level.",
   "The hash sign (#) can be used to subscribe to all underlying hierarchy levels.",
   "The subscription house/# matches only the exact topic house.",
   "The subscription house/+/temperature can match house/kitchen/temperature."
  ],
  "answer": "The hash sign (#) can be used to subscribe to all underlying hierarchy levels.||The plus sign (+) matches an arbitrary value at exactly one hierarchy level.||The subscription house/+/temperature can match house/kitchen/temperature.",
  "multi": true
 },
 {
  "id": 18,
  "week": 2,
  "question": "Which of the following are main stages of Secure MQTT (SMQTT)?",
  "options": [
   "Setup",
   "Publish",
   "Decryption",
   "Route discovery"
  ],
  "answer": "Decryption||Publish||Setup",
  "multi": true
 },
 {
  "id": 19,
  "week": 2,
  "question": "At the transport layer, CoAP (Constrained Application Protocol) operates over which protocol?",
  "options": [
   "TCP",
   "UDP",
   "SCTP",
   "FTP"
  ],
  "answer": "UDP"
 },
 {
  "id": 20,
  "week": 2,
  "question": "State True or False.\n\nIn CoAP, a piggyback response is carried with the acknowledgment, whereas in the separate mode, the server response is sent in a message separate from the acknowledgment.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 21,
  "week": 2,
  "question": "Which of the following CoAP request-method mappings are correct?",
  "options": [
   "GET — retrieve data",
   "PUT — create data",
   "PUSH — update data",
   "DELETE — delete data"
  ],
  "answer": "DELETE — delete data||GET — retrieve data||PUSH — update data||PUT — create data",
  "multi": true
 },
 {
  "id": 22,
  "week": 2,
  "question": "Which AMQP frame type is used to control the message-flow rate?",
  "options": [
   "Transfer",
   "Detach",
   "Disposition",
   "Flow"
  ],
  "answer": "Flow"
 },
 {
  "id": 23,
  "week": 2,
  "question": "Which of the following statements about AMQP components are correct?",
  "options": [
   "An exchange receives messages and routes them to queues.",
   "A queue stores messages for business processes or consumers.",
   "A binding specifies message-distribution rules between an exchange and queues.",
   "A consumer must route every producer message before it reaches an exchange."
  ],
  "answer": "A binding specifies message-distribution rules between an exchange and queues.||A queue stores messages for business processes or consumers.||An exchange receives messages and routes them to queues.",
  "multi": true
 },
 {
  "id": 24,
  "week": 2,
  "question": "Which of the following IEEE 802.15.4 variant-application pairs are correct?",
  "options": [
   "IEEE 802.15.4c — China",
   "IEEE 802.15.4e — Industrial applications",
   "IEEE 802.15.4f — Active RFID",
   "IEEE 802.15.4g — Smart utility networks"
  ],
  "answer": "IEEE 802.15.4c — China||IEEE 802.15.4e — Industrial applications||IEEE 802.15.4f — Active RFID||IEEE 802.15.4g — Smart utility networks",
  "multi": true
 },
 {
  "id": 25,
  "week": 2,
  "question": "In a non-beacon-enabled IEEE 802.15.4 network, data frames are transmitted using:",
  "options": [
   "Slotted CSMA/CA",
   "Unslotted CSMA/CA",
   "Token passing",
   "Pure TDMA only"
  ],
  "answer": "Unslotted CSMA/CA"
 },
 {
  "id": 26,
  "week": 2,
  "question": "Which statement correctly describes the relationship between IEEE 802.15.4 and ZigBee?",
  "options": [
   "IEEE 802.15.4 provides layers 1 and 2, while ZigBee extends the functionality to layer 3 and above.",
   "ZigBee provides only the physical layer, while IEEE 802.15.4 provides all higher layers.",
   "Both standards operate only at the application layer.",
   "ZigBee and IEEE 802.15.4 are identical standards with no functional distinction."
  ],
  "answer": "IEEE 802.15.4 provides layers 1 and 2, while ZigBee extends the functionality to layer 3 and above."
 },
 {
  "id": 27,
  "week": 2,
  "question": "Which of the following statements characterizes a ZigBee end device?",
  "options": [
   "It communicates with its parent node.",
   "It cannot relay data for other devices.",
   "It is a reduced-functionality device.",
   "It forms the network root and acts as the trust center."
  ],
  "answer": "It cannot relay data for other devices.||It communicates with its parent node.||It is a reduced-functionality device.",
  "multi": true
 },
 {
  "id": 28,
  "week": 2,
  "question": "Which option correctly describes addressing in 6LoWPAN?",
  "options": [
   "A 16-bit address is globally unique, while a 64-bit address is PAN-specific.",
   "A 16-bit short address is PAN-specific and assigned by the PAN coordinator, while a 64-bit extended address is globally unique.",
   "Both 16-bit and 64-bit addresses are globally unique and assigned by an Internet router.",
   "Both address types are used only for multicast communication."
  ],
  "answer": "A 16-bit short address is PAN-specific and assigned by the PAN coordinator, while a 64-bit extended address is globally unique."
 },
 {
  "id": 29,
  "week": 2,
  "question": "State True or False.\n\nIn LOADng routing, an intermediate router may respond to a Route Request (RREQ) whenever it already has an active route to the requested destination.",
  "options": [
   "True",
   "False"
  ],
  "answer": "False"
 },
 {
  "id": 30,
  "week": 2,
  "question": "How does a passive RFID tag obtain the power required to transmit information?",
  "options": [
   "It uses its own internal battery.",
   "It is powered inductively by an RFID reader.",
   "It receives power through a wired AIDC connection.",
   "It does not require any source of power."
  ],
  "answer": "It is powered inductively by an RFID reader."
 },
 {
  "id": 31,
  "week": 3,
  "question": "Which WirelessHART data-link mechanism provides reliable, collision-free, and deterministic communication?",
  "options": [
   "Superframes divided into 10-millisecond TDMA time slots",
   "Pure ALOHA without time-slot allocation",
   "CSMA/CD over a wired Ethernet bus",
   "Token-ring circulation among field devices"
  ],
  "answer": "Superframes divided into 10-millisecond TDMA time slots"
 },
 {
  "id": 32,
  "week": 3,
  "question": "In WirelessHART, which entity supervises network nodes and guides them regarding when and where packets should be transmitted?",
  "options": [
   "Network manager",
   "NFC reader",
   "Z-Wave end device",
   "Bluetooth inquiry agent"
  ],
  "answer": "Network manager"
 },
 {
  "id": 33,
  "week": 3,
  "question": "Which of the following are operating modes of NFC?",
  "options": [
   "Peer-to-peer mode",
   "Read/write mode",
   "Card-emulation mode",
   "Frequency-hopping mode"
  ],
  "answer": "Card-emulation mode||Peer-to-peer mode||Read/write mode",
  "multi": true
 },
 {
  "id": 34,
  "week": 3,
  "question": "Which of the following are phases of Bluetooth connection establishment?",
  "options": [
   "Inquiry or discovery phase",
   "Paging phase",
   "Connection phase",
   "Channel-blacklisting phase"
  ],
  "answer": "Connection phase||Inquiry or discovery phase||Paging phase",
  "multi": true
 },
 {
  "id": 35,
  "week": 3,
  "question": "In which Bluetooth operating mode does a slave remain inactive until the master instructs it to wake up?",
  "options": [
   "Active mode",
   "Sniff mode",
   "Hold mode",
   "Park mode"
  ],
  "answer": "Park mode"
 },
 {
  "id": 36,
  "week": 3,
  "question": "Which of the following functions are provided by the Bluetooth L2CAP layer?",
  "options": [
   "Connection-oriented and connectionless data services",
   "Protocol multiplexing",
   "Segmentation and reassembly",
   "Generation of the magnetic field used by NFC tags"
  ],
  "answer": "Connection-oriented and connectionless data services||Protocol multiplexing||Segmentation and reassembly",
  "multi": true
 },
 {
  "id": 37,
  "week": 3,
  "question": "A single Z-Wave network can contain up to approximately how many nodes?",
  "options": [
   "32",
   "64",
   "128",
   "232"
  ],
  "answer": "232"
 },
 {
  "id": 38,
  "week": 3,
  "question": "Which of the following statements about Z-Wave addressing are correct?",
  "options": [
   "Each logical Z-Wave network has one Home ID.",
   "A Z-Wave Node ID has a length of one byte.",
   "A Z-Wave Home ID has a length of four bytes.",
   "Nodes having different Home IDs can communicate directly with one another."
  ],
  "answer": "A Z-Wave Home ID has a length of four bytes.||A Z-Wave Node ID has a length of one byte.||Each logical Z-Wave network has one Home ID.",
  "multi": true
 },
 {
  "id": 39,
  "week": 3,
  "question": "Which of the following statements about ISA100.11a are correct?",
  "options": [
   "Its network and transport layers are based on TCP, UDP, or IPv6.",
   "Its data-link layer supports mesh networking with frequency hopping.",
   "Its radio is based on IEEE 802.15.4.",
   "It supports only a ring topology."
  ],
  "answer": "Its data-link layer supports mesh networking with frequency hopping.||Its network and transport layers are based on TCP, UDP, or IPv6.||Its radio is based on IEEE 802.15.4.",
  "multi": true
 },
 {
  "id": 40,
  "week": 3,
  "question": "Why is multi-hop communication commonly used in a wireless sensor network?",
  "options": [
   "Sensor nodes have short transmission ranges, so intermediate nodes relay data toward the sink.",
   "Every sensor node must communicate directly with the Internet.",
   "Multi-hop communication eliminates the need for a sink node.",
   "Only mobile sensor nodes are permitted to transmit data."
  ],
  "answer": "Sensor nodes have short transmission ranges, so intermediate nodes relay data toward the sink."
 },
 {
  "id": 41,
  "week": 3,
  "question": "Which of the following is described as an optional unit of a sensor node?",
  "options": [
   "Sensing unit",
   "Processing unit",
   "Power unit",
   "Location-finding system such as GPS"
  ],
  "answer": "Location-finding system such as GPS"
 },
 {
  "id": 42,
  "week": 3,
  "question": "If n denotes the number of nodes in a sensor network, the lecture states that the throughput decreases approximately at what rate as the network scales?",
  "options": [
   "1/n",
   "n",
   "√n",
   "1/√n"
  ],
  "answer": "1/√n"
 },
 {
  "id": 43,
  "week": 3,
  "question": "Which types of sensor-node misbehavior are classified as intentional?",
  "options": [
   "Malicious behavior",
   "Selfish behavior",
   "Failed-node behavior",
   "Badly failed-node behavior"
  ],
  "answer": "Malicious behavior||Selfish behavior",
  "multi": true
 },
 {
  "id": 44,
  "week": 3,
  "question": "What distinguishes a badly failed sensor node from an ordinarily failed sensor node?",
  "options": [
   "It additionally sends false routing messages.",
   "It always increases the network throughput.",
   "It changes from a mobile node into a stationary node.",
   "It communicates normally but consumes no power."
  ],
  "answer": "It additionally sends false routing messages."
 },
 {
  "id": 45,
  "week": 3,
  "question": "Which consequence may arise when a selfish sensor node refuses to cooperate because forwarding involves a personal cost?",
  "options": [
   "It forwards every received packet twice.",
   "It drops a received packet instead of forwarding it.",
   "It automatically becomes the sink node.",
   "It increases the communication range of neighboring nodes."
  ],
  "answer": "It drops a received packet instead of forwarding it."
 },
 {
  "id": 46,
  "week": 4,
  "question": "What does the ultrasonic sensor measure generally in the AID system?",
  "options": [
   "Humidity",
   "Distance of the object",
   "Soil pH",
   "Light intensity"
  ],
  "answer": "Distance of the object"
 },
 {
  "id": 47,
  "week": 4,
  "question": "Which component processes the data received from the sensors in the AID system?",
  "options": [
   "Camera",
   "NFC tag",
   "Microcontroller",
   "Ultrasonic sensor"
  ],
  "answer": "Microcontroller"
 },
 {
  "id": 48,
  "week": 4,
  "question": "How can standard nanodevices communicate?",
  "options": [
   "Electromagnetic communication",
   "Molecular communication",
   "Wired Ethernet",
   "ZigBee communication"
  ],
  "answer": "Electromagnetic communication||Molecular communication",
  "multi": true
 },
 {
  "id": 49,
  "week": 4,
  "question": "When does sensing coverage guarantee network connectivity?",
  "options": [
   "When the transmission range is at least twice the sensing range",
   "When the sensing range is at least twice the transmission range",
   "When the transmission and sensing ranges are equal",
   "When the transmission range is smaller than the sensing range"
  ],
  "answer": "When the transmission range is at least twice the sensing range"
 },
 {
  "id": 50,
  "week": 4,
  "question": "Which of the following is a coverage problem in a static WSN?",
  "options": [
   "Area coverage",
   "Data compression",
   "Route encryption",
   "Clock synchronization"
  ],
  "answer": "Area coverage"
 },
 {
  "id": 51,
  "week": 4,
  "question": "Which reporting method is used for forest-fire monitoring in a WSN?",
  "options": [
   "Event-driven reporting",
   "On-demand reporting",
   "Manual reporting",
   "Location-based reporting"
  ],
  "answer": "Event-driven reporting"
 },
 {
  "id": 52,
  "week": 4,
  "question": "What does a data mule do?",
  "options": [
   "Replaces all sensor nodes",
   "Measures only temperature",
   "Collects data and carries it to the sink",
   "Repairs damaged hardware"
  ],
  "answer": "Collects data and carries it to the sink"
 },
 {
  "id": 53,
  "week": 4,
  "question": "What may happen if a critical stationary sensor node fails?",
  "options": [
   "The network may be partitioned",
   "All nodes become mobile",
   "The sensing range doubles",
   "The network repairs itself by movement"
  ],
  "answer": "The network may be partitioned"
 },
 {
  "id": 54,
  "week": 4,
  "question": "A person who provides sensing information acts as a:",
  "options": [
   "Router",
   "Radio channel",
   "Actuator",
   "Data source"
  ],
  "answer": "Data source"
 },
 {
  "id": 55,
  "week": 4,
  "question": "Which is an advantage of a stationary wireless sensor network?",
  "options": [
   "Easy topology maintenance",
   "Automatic movement after node failure",
   "Continuously changing topology",
   "Unpredictable sensor locations"
  ],
  "answer": "Easy topology maintenance"
 },
 {
  "id": 56,
  "week": 4,
  "question": "State whether the following statement is True or False: In a UAV network, the network topology may change frequently because the UAVs are mobile.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 57,
  "week": 4,
  "question": "Which is a common issue in UAV networks?",
  "options": [
   "Frequent topology changes",
   "Fixed relative positions",
   "Permanent communication links",
   "No possibility of UAV failure"
  ],
  "answer": "Frequent topology changes"
 },
 {
  "id": 58,
  "week": 4,
  "question": "Compared with traditional SCADA, M2M supports:",
  "options": [
   "Only isolated systems",
   "No device communication",
   "Continuous human control",
   "Cross-platform integration"
  ],
  "answer": "Cross-platform integration"
 },
 {
  "id": 59,
  "week": 4,
  "question": "State whether the following statement is True or False: In a stationary wireless sensor network, sensor nodes can automatically move to restore connectivity after a node failure.",
  "options": [
   "True",
   "False"
  ],
  "answer": "False"
 },
 {
  "id": 60,
  "week": 4,
  "question": "Which statement best describes M2M communication?",
  "options": [
   "Devices can exchange data without direct human control",
   "Every data exchange must be performed manually",
   "Only one device can communicate at a time",
   "Devices cannot communicate through a network"
  ],
  "answer": "Devices can exchange data without direct human control"
 },
 {
  "id": 61,
  "week": 5,
  "question": "What does interoperability allow IoT devices to do?",
  "options": [
   "Communicate and exchange data",
   "Work only offline",
   "Use only one protocol",
   "Disable other devices"
  ],
  "answer": "Communicate and exchange data"
 },
 {
  "id": 62,
  "week": 5,
  "question": "Syntactic interoperability deals with:",
  "options": [
   "Message format",
   "Battery size",
   "Device colour",
   "Sensor weight"
  ],
  "answer": "Message format"
 },
 {
  "id": 63,
  "week": 5,
  "question": "What does UMB stand for?",
  "options": [
   "Universal Middleware Bridge",
   "Unified Mobile Board",
   "Universal Memory Block",
   "User Management Bridge"
  ],
  "answer": "Universal Middleware Bridge"
 },
 {
  "id": 64,
  "week": 5,
  "question": "What is the operating voltage of the Arduino UNO?",
  "options": [
   "3.3 V",
   "5 V",
   "9 V",
   "12 V"
  ],
  "answer": "5 V"
 },
 {
  "id": 65,
  "week": 5,
  "question": "What is a program written in the Arduino IDE called?",
  "options": [
   "Packet",
   "Sketch",
   "Frame",
   "Query"
  ],
  "answer": "Sketch"
 },
 {
  "id": 66,
  "week": 5,
  "question": "Which interface is mainly used to connect an Arduino UNO to a computer?",
  "options": [
   "HDMI",
   "USB",
   "VGA",
   "Ethernet"
  ],
  "answer": "USB"
 },
 {
  "id": 67,
  "week": 5,
  "question": "What is the conventional starting index of an array in Arduino programming?",
  "options": [
   "-1",
   "0",
   "1",
   "2"
  ],
  "answer": "0"
 },
 {
  "id": 68,
  "week": 5,
  "question": "Which Arduino function is used to generate a pseudo-random number within a specified range?",
  "options": [
   "random()",
   "pinMode()",
   "digitalWrite()",
   "attachInterrupt()"
  ],
  "answer": "random()"
 },
 {
  "id": 69,
  "week": 5,
  "question": "In the traffic-control example, which LED is switched ON first to represent the GO signal?",
  "options": [
   "Red LED",
   "Yellow LED",
   "Green LED",
   "All three LEDs simultaneously"
  ],
  "answer": "Green LED"
 },
 {
  "id": 70,
  "week": 5,
  "question": "Which quantities are measured by a DHT sensor?",
  "options": [
   "Temperature and humidity",
   "Distance and speed",
   "Light and sound",
   "Pressure and altitude"
  ],
  "answer": "Temperature and humidity"
 },
 {
  "id": 71,
  "week": 5,
  "question": "What does a sensor convert a physical quantity into?",
  "options": [
   "A software program",
   "Mechanical motion",
   "A network address",
   "An electrical signal"
  ],
  "answer": "An electrical signal"
 },
 {
  "id": 72,
  "week": 5,
  "question": "In the DHT sensor sketch, delay(2000) causes successive readings to be printed after approximately how much time?",
  "options": [
   "0.2 seconds",
   "1 second",
   "2 seconds",
   "20 seconds"
  ],
  "answer": "2 seconds"
 },
 {
  "id": 73,
  "week": 5,
  "question": "State whether the following statement is True or False: A servo motor is a low-precision motor used only for linear motion.",
  "options": [
   "True",
   "False"
  ],
  "answer": "False"
 },
 {
  "id": 74,
  "week": 5,
  "question": "Which device provides controlled rotary motion?",
  "options": [
   "Ultrasonic sensor",
   "DHT sensor",
   "PIR sensor",
   "Servo motor"
  ],
  "answer": "Servo motor"
 },
 {
  "id": 75,
  "week": 5,
  "question": "State whether the following statement is True or False: A stepper motor is a type of actuator.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 76,
  "week": 6,
  "question": "What are the five basic data types available in Python, as introduced in the lecture?",
  "options": [
   "Numbers, Strings, List, Tuple, Dictionary",
   "Integer, Float, Boolean, Char, Byte",
   "Array, Struct, Class, Object, Set",
   "Numbers, Strings, Queue, Stack, Graph"
  ],
  "answer": "Numbers, Strings, List, Tuple, Dictionary"
 },
 {
  "id": 77,
  "week": 6,
  "question": "Which keyword is used to define a function in Python?",
  "options": [
   "func",
   "def",
   "define",
   "function"
  ],
  "answer": "def"
 },
 {
  "id": 78,
  "week": 6,
  "question": "In Python exception handling, which keyword is used to handle an exception raised inside the try block?",
  "options": [
   "catch",
   "except",
   "handle",
   "rescue"
  ],
  "answer": "except"
 },
 {
  "id": 79,
  "week": 6,
  "question": "State whether the following statement is True or False: Python dictionaries allow duplicate keys.",
  "options": [
   "True",
   "False",
   "None of the above",
   "Both"
  ],
  "answer": "None of the above"
 },
 {
  "id": 80,
  "week": 6,
  "question": "In Python, which module is used to generate pseudo-random numbers?",
  "options": [
   "rand",
   "random",
   "math",
   "num"
  ],
  "answer": "random"
 },
 {
  "id": 81,
  "week": 6,
  "question": "Which of the following is not a characteristic of Raspberry Pi?",
  "options": [
   "Low cost",
   "High power consumption",
   "Credit-card size",
   "Single-board computer"
  ],
  "answer": "High power consumption"
 },
 {
  "id": 82,
  "week": 6,
  "question": "What type of architecture does the Raspberry Pi processor use?",
  "options": [
   "x86",
   "MIPS",
   "ARM",
   "PowerPC"
  ],
  "answer": "ARM"
 },
 {
  "id": 83,
  "week": 6,
  "question": "Which command is used to install the GPIO library on Raspberry Pi before programming the blinking LED example?",
  "options": [
   "sudo apt-get install python-rpi.gpio",
   "pip install gpio",
   "sudo apt-get install led-lib",
   "npm install rpi-gpio"
  ],
  "answer": "sudo apt-get install python-rpi.gpio"
 },
 {
  "id": 84,
  "week": 6,
  "question": "Which pin on the Raspberry Pi GPIO header provides a 5V power supply?",
  "options": [
   "Pin 1",
   "Pin 3",
   "Pin 6",
   "Pin 2"
  ],
  "answer": "Pin 2"
 },
 {
  "id": 85,
  "week": 6,
  "question": "Where is the CSI camera connector slot located on the Raspberry Pi board?",
  "options": [
   "Between the Ethernet port and the HDMI port",
   "Between the USB ports",
   "Next to the power supply pin",
   "On the underside of the board"
  ],
  "answer": "Between the Ethernet port and the HDMI port"
 },
 {
  "id": 86,
  "week": 6,
  "question": "Which terminal command captures a still image using the Raspberry Pi camera?",
  "options": [
   "raspicam capture",
   "raspistill -o image.jpg",
   "pi-camera snap",
   "capture.py --img"
  ],
  "answer": "raspistill -o image.jpg"
 },
 {
  "id": 87,
  "week": 6,
  "question": "What does DHT stand for in the DHT sensor used with Raspberry Pi in the auto-cooling system?",
  "options": [
   "Digital Humidity and Temperature",
   "Digital Heat Transfer",
   "Direct Hardware Trigger",
   "Dual Humidity Thermostat"
  ],
  "answer": "Digital Humidity and Temperature"
 },
 {
  "id": 88,
  "week": 6,
  "question": "How many output terminals does the relay used in the temperature-dependent auto-cooling system have, as shown in the lecture?",
  "options": [
   "2",
   "3",
   "4",
   "5"
  ],
  "answer": "3"
 },
 {
  "id": 89,
  "week": 6,
  "question": "What is the function of the relay module in the temperature-dependent auto-cooling system?",
  "options": [
   "Read humidity",
   "Switch high power devices on or off using low power signals",
   "Regulate input voltage",
   "Provide analog output"
  ],
  "answer": "Switch high power devices on or off using low power signals"
 },
 {
  "id": 90,
  "week": 6,
  "question": "State whether the following statement is True or False: In the temperature-dependent auto-cooling system, the fan operates when the surrounding temperature rises above the threshold value specified in the code.",
  "options": [
   "True",
   "False"
  ],
  "answer": "True"
 },
 {
  "id": 91,
  "week": 7,
  "question": "Which of the following is an open-source hardware board supported by the Python ecosystem for IoT development?",
  "options": [
   "Raspberry Pi",
   "Arduino",
   "BeagleBone Black",
   "All of these"
  ],
  "answer": "All of these"
 },
 {
  "id": 92,
  "week": 7,
  "question": "What does GPIO stand for in the context of Raspberry Pi?",
  "options": [
   "General Purpose Input Output",
   "General Public Input Output",
   "Grand Performance Input Output",
   "Graphical Processing Input Output"
  ],
  "answer": "General Purpose Input Output"
 },
 {
  "id": 93,
  "week": 7,
  "question": "What is the primary function of Python on a Raspberry Pi?",
  "options": [
   "System administration",
   "Web development",
   "Interfacing with hardware components",
   "Database management"
  ],
  "answer": "Interfacing with hardware components"
 },
 {
  "id": 94,
  "week": 7,
  "question": "In Python, which library is commonly used for GPIO pin manipulation on a Raspberry Pi?",
  "options": [
   "RPi.GPIO",
   "GPIO.RPi",
   "PyGPIO",
   "RPi.Pin"
  ],
  "answer": "RPi.GPIO"
 },
 {
  "id": 95,
  "week": 7,
  "question": "What command is used to install Python packages on a Raspberry Pi?",
  "options": [
   "apt-get install",
   "pip install",
   "npm install",
   "easy_install"
  ],
  "answer": "pip install"
 },
 {
  "id": 96,
  "week": 7,
  "question": "What function is used in RPi.GPIO to clean up the GPIO settings before exiting a Python script?",
  "options": [
   "GPIO.reset()",
   "GPIO.clear()",
   "GPIO.cleanup()",
   "GPIO.close()"
  ],
  "answer": "GPIO.cleanup()"
 },
 {
  "id": 97,
  "week": 7,
  "question": "In Python GPIO programming, which mode is set using GPIO.setmode(GPIO.BOARD)?",
  "options": [
   "Pin numbering based on BCM SoC",
   "Pin numbering based on physical board pins",
   "Pin numbering based on logical layout",
   "Pin numbering based on wiringPi"
  ],
  "answer": "Pin numbering based on physical board pins"
 },
 {
  "id": 98,
  "week": 7,
  "question": "How do software-defined networks differ from traditional networks?",
  "options": [
   "Software-defined networks separate control and data planes.",
   "Traditional networks rely on centralized controllers.",
   "Software-defined networks do not support wireless communication.",
   "Traditional networks use programmable switches."
  ],
  "answer": "Software-defined networks separate control and data planes."
 },
 {
  "id": 99,
  "week": 7,
  "question": "What is the main component responsible for making forwarding decisions in an SDN architecture?",
  "options": [
   "Data plane",
   "Control plane",
   "Physical switches",
   "End-user devices"
  ],
  "answer": "Control plane"
 },
 {
  "id": 100,
  "week": 7,
  "question": "In SDN-WISE, what role does the sink node play?",
  "options": [
   "Acts as a controller for the entire network",
   "Connects the WSN to the SDN controller",
   "Manages power distribution to sensor nodes",
   "Generates flow rules for all switches"
  ],
  "answer": "Connects the WSN to the SDN controller"
 },
 {
  "id": 101,
  "week": 7,
  "question": "What is the typical default maximum transmission unit MTU size in bytes for IEEE 802.15.4 frames used in SD-WSNs?",
  "options": [
   "127",
   "100",
   "200",
   "500"
  ],
  "answer": "200"
 },
 {
  "id": 102,
  "week": 7,
  "question": "Which control mechanism is described where the entire network control decisions are taken by a single controller?",
  "options": [
   "Distributed control",
   "Centralized control",
   "Hierarchical control",
   "Federated control"
  ],
  "answer": "Centralized control"
 },
 {
  "id": 103,
  "week": 7,
  "question": "Which of the following is listed as a benefit of integrating SDN with IoT?",
  "options": [
   "Increased hardware cost",
   "Visibility of network resources",
   "Reduced sensor accuracy",
   "Elimination of all controllers"
  ],
  "answer": "Visibility of network resources"
 },
 {
  "id": 104,
  "week": 7,
  "question": "According to the lecture, what is a key resource-constraint challenge in wireless sensor networks that motivates software-defined WSN?",
  "options": [
   "Excess bandwidth",
   "Limited memory for control programs",
   "Too many controllers",
   "Unlimited computation power"
  ],
  "answer": "Limited memory for control programs"
 },
 {
  "id": 105,
  "week": 7,
  "question": "In the SDN-WISE protocol stack for sensor nodes, what does INPP stand for?",
  "options": [
   "Integrated Node Path Protocol",
   "Internal Node Power Processing",
   "In Network Packet Processing",
   "IoT Network Priority Protocol"
  ],
  "answer": "In Network Packet Processing"
 },
 {
  "id": 106,
  "week": 8,
  "question": "Which of the following is listed as a problem in traditional non-SDN mobile networks?",
  "options": [
   "Too flexible hardware architecture",
   "Excess centralized control",
   "Very low operational cost",
   "Difficult to scale due to static, over-provisioned networks"
  ],
  "answer": "Difficult to scale due to static, over-provisioned networks"
 },
 {
  "id": 107,
  "week": 8,
  "question": "In the ODIN architecture for software-defined wireless networks, what does the Odin agent do?",
  "options": [
   "It is placed at the controller end to manage policies",
   "It replaces the OpenFlow protocol entirely",
   "It is placed with the physical devices to communicate with the controller",
   "It performs billing for cloud resources"
  ],
  "answer": "It is placed with the physical devices to communicate with the controller"
 },
 {
  "id": 108,
  "week": 8,
  "question": "What is the primary goal of Mobi-Flow's proactive rule placement approach in Software-Defined IoT?",
  "options": [
   "To place flow-rules randomly across all access points",
   "To predict users' future location and place flow-rules at APs accordingly",
   "To eliminate the need for a controller",
   "To increase the number of PACKET-IN messages"
  ],
  "answer": "To predict users' future location and place flow-rules at APs accordingly"
 },
 {
  "id": 109,
  "week": 8,
  "question": "In the Software-Defined Sensor Network SDSN framework, what is the role of the Task Manager?",
  "options": [
   "It serves as the physical sensor node that senses environment metrics",
   "It manages flow tables directly on wireless switches",
   "It routes network traffic between base stations",
   "It acts as the user interface through which users submit tasks and query network details"
  ],
  "answer": "It acts as the user interface through which users submit tasks and query network details"
 },
 {
  "id": 110,
  "week": 8,
  "question": "According to the NIST definition, which of the following is NOT listed as an essential characteristic of Cloud Computing?",
  "options": [
   "On-demand self-service",
   "Dedicated single-tenant hardware for every user",
   "Broad network access",
   "Rapid elasticity"
  ],
  "answer": "Dedicated single-tenant hardware for every user"
 },
 {
  "id": 111,
  "week": 8,
  "question": "Which cloud computing service model provides hardware, operating system, storage, and network infrastructure, while leaving software application development to the user?",
  "options": [
   "Platform as a Service PaaS",
   "Software as a Service SaaS",
   "Infrastructure as a Service IaaS",
   "Anything as a Service XaaS"
  ],
  "answer": "Platform as a Service PaaS"
 },
 {
  "id": 112,
  "week": 8,
  "question": "In the Cloud Reference Model, which cloud deployment model is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns?",
  "options": [
   "Private Cloud",
   "Community Cloud",
   "Public Cloud",
   "Hybrid Cloud"
  ],
  "answer": "Community Cloud"
 },
 {
  "id": 113,
  "week": 8,
  "question": "What is the main function of the Virtual Machine Monitor VMM or Hypervisor in virtualization?",
  "options": [
   "To mediate access to physical hardware resources among virtual machines",
   "To physically manufacture virtual memory chips",
   "To serve as a high-level user interface for web browsing",
   "To manage public cloud billing and accounting exclusively"
  ],
  "answer": "To mediate access to physical hardware resources among virtual machines"
 },
 {
  "id": 114,
  "week": 8,
  "question": "Which type of hypervisor runs directly on the bare-metal hardware without requiring an underlying operating system?",
  "options": [
   "Type-2 Hypervisor",
   "Hosted Hypervisor",
   "Type-1 Hypervisor",
   "Application-level Hypervisor"
  ],
  "answer": "Type-1 Hypervisor"
 },
 {
  "id": 115,
  "week": 8,
  "question": "What is Full Virtualization?",
  "options": [
   "Virtualization where the guest operating system is modified to communicate directly with the hypervisor",
   "Virtualization where only user-level applications are run in isolated containers",
   "Virtualization that does not use a hypervisor at all",
   "Virtualization where the underlying physical hardware is completely simulated, allowing unmodified guest OS to run"
  ],
  "answer": "Virtualization where the underlying physical hardware is completely simulated, allowing unmodified guest OS to run"
 },
 {
  "id": 116,
  "week": 8,
  "question": "How does Para-Virtualization differ from Full Virtualization?",
  "options": [
   "Para-virtualization requires no hypervisor",
   "Para-virtualization can only run Windows operating systems",
   "Para-virtualization modifies the guest OS so it is aware it is running on a hypervisor, using hypercalls instead of binary translation",
   "Para-virtualization provides lower performance than full virtualization"
  ],
  "answer": "Para-virtualization modifies the guest OS so it is aware it is running on a hypervisor, using hypercalls instead of binary translation"
 },
 {
  "id": 117,
  "week": 8,
  "question": "In Container-based Virtualization OS-level virtualization, what is shared among all containers running on the same host?",
  "options": [
   "Each container has its own independent kernel",
   "All containers share the host operating system kernel",
   "Containers do not use host hardware resources",
   "Containers require dedicated physical processors for each container"
  ],
  "answer": "All containers share the host operating system kernel"
 },
 {
  "id": 118,
  "week": 8,
  "question": "In the Infrastructure as a Service IaaS model, which layer is typically managed by the cloud service provider?",
  "options": [
   "The underlying physical servers, storage, networking, and hypervisor",
   "The operating system installed on the virtual machine",
   "The application data stored inside the virtual machine",
   "The source code of hosted applications"
  ],
  "answer": "The underlying physical servers, storage, networking, and hypervisor"
 },
 {
  "id": 119,
  "week": 8,
  "question": "What is the main purpose of using cloud simulators such as CloudSim before actual deployment?",
  "options": [
   "To permanently replace the need for real cloud infrastructure",
   "To physically manufacture cloud hardware",
   "To increase the billing cost of cloud services",
   "To provide a reliable, scalable, and repeatable environment for pre-deployment performance evaluation"
  ],
  "answer": "To provide a reliable, scalable, and repeatable environment for pre-deployment performance evaluation"
 },
 {
  "id": 120,
  "week": 8,
  "question": "CloudSim, a widely used cloud simulation framework, was developed at which institution and is based on which programming language?",
  "options": [
   "Stanford University, based on Python",
   "CLOUDS Lab, University of Melbourne, based on Java",
   "MIT, based on C++",
   "IIT Kharagpur, based on JavaScript"
  ],
  "answer": "CLOUDS Lab, University of Melbourne, based on Java"
 },
 {
  "id": 121,
  "week": 9,
  "question": "OpenStack was launched in 2010 as a joint project between Rackspace Hosting and which other organization?",
  "options": [
   "Google",
   "Microsoft",
   "NASA",
   "IBM"
  ],
  "answer": "NASA"
 },
 {
  "id": 122,
  "week": 9,
  "question": "Which OpenStack component provides the dashboard GUI that gives an overview of the other components?",
  "options": [
   "Nova",
   "Keystone",
   "Horizon",
   "Swift"
  ],
  "answer": "Horizon"
 },
 {
  "id": 123,
  "week": 9,
  "question": "Which OpenStack component is the compute service where instances are launched?",
  "options": [
   "Nova",
   "Glance",
   "Cinder",
   "Neutron"
  ],
  "answer": "Nova"
 },
 {
  "id": 124,
  "week": 9,
  "question": "In the sensor-cloud architecture, which component is primarily responsible for physical data collection from the environment?",
  "options": [
   "Cloud Service Provider",
   "Sensor Nodes / Wireless Sensor Networks WSNs",
   "Virtual Sensor Manager",
   "Sensor-Cloud User"
  ],
  "answer": "Cloud Service Provider"
 },
 {
  "id": 125,
  "week": 9,
  "question": "What is the primary role of virtual sensors in a sensor-cloud framework?",
  "options": [
   "To replace physical sensors entirely",
   "To provide abstraction, pooling, and dynamic allocation of physical sensor resources",
   "To increase the energy consumption of sensor nodes",
   "To execute local control loops without network connectivity"
  ],
  "answer": "To provide abstraction, pooling, and dynamic allocation of physical sensor resources"
 },
 {
  "id": 126,
  "week": 9,
  "question": "Which of the following is a key advantage of Sensor-Cloud over traditional Wireless Sensor Networks WSNs?",
  "options": [
   "Limited scalability",
   "Single-user access only",
   "Multi-tenancy and high resource utilization",
   "High physical maintenance per user"
  ],
  "answer": "Multi-tenancy and high resource utilization"
 },
 {
  "id": 127,
  "week": 9,
  "question": "In sensor-cloud environments, what does Sensor-as-a-Service SaaS allow users to do?",
  "options": [
   "Purchase physical sensor hardware permanently",
   "Access, manage, and consume sensor data on-demand via cloud interfaces",
   "Disable all physical sensor security protocols",
   "Manually re-wire sensor nodes"
  ],
  "answer": "Access, manage, and consume sensor data on-demand via cloud interfaces"
 },
 {
  "id": 128,
  "week": 9,
  "question": "Which management function in sensor-cloud handles the mapping of physical sensors to virtual sensors?",
  "options": [
   "Data Caching Engine",
   "Provisioning and Management Mechanism",
   "Physical Gateway Controller",
   "User Billing Module"
  ],
  "answer": "Provisioning and Management Mechanism"
 },
 {
  "id": 129,
  "week": 9,
  "question": "What is the primary purpose of data caching mechanisms in sensor-cloud systems?",
  "options": [
   "To permanently store all raw data without indexing",
   "To reduce redundant data transmissions and save energy/bandwidth",
   "To increase query latency for end-users",
   "To eliminate the need for virtual sensors"
  ],
  "answer": "To reduce redundant data transmissions and save energy/bandwidth"
 },
 {
  "id": 130,
  "week": 9,
  "question": "What type of caching involves storing data directly within the sensor nodes or gateway before transmission to the cloud?",
  "options": [
   "Cloud-side Cache",
   "Edge / Local Cache",
   "Distributed Cache DC",
   "Internal Cache IC"
  ],
  "answer": "Internal Cache IC"
 },
 {
  "id": 131,
  "week": 9,
  "question": "Why is dynamic and adaptive data caching useful in sensor-cloud, according to the lecture?",
  "options": [
   "Because environmental conditions always change extremely fast",
   "Because it removes the need for a sensor-owner",
   "Because caching eliminates the need for virtualization",
   "Because unnecessary sensing during slow environmental change wastes energy"
  ],
  "answer": "Because unnecessary sensing during slow environmental change wastes energy"
 },
 {
  "id": 132,
  "week": 9,
  "question": "Which company is credited with coining the term fog computing?",
  "options": [
   "Google",
   "Amazon",
   "CISCO",
   "IBM"
  ],
  "answer": "CISCO"
 },
 {
  "id": 133,
  "week": 9,
  "question": "Which of the following is listed as a key issue with the traditional cloud model that motivates fog computing?",
  "options": [
   "Excess bandwidth availability",
   "Volume, latency, and bandwidth limitations of the cloud",
   "Too much local processing power at the device level",
   "Absence of any IoT devices"
  ],
  "answer": "Volume, latency, and bandwidth limitations of the cloud"
 },
 {
  "id": 134,
  "week": 9,
  "question": "Where is the fog layer positioned in the fog computing architecture?",
  "options": [
   "Above the cloud layer",
   "Between the cloud and the IoT devices",
   "Inside each IoT device only",
   "There is no fixed position; it replaces the cloud entirely"
  ],
  "answer": "Between the cloud and the IoT devices"
 },
 {
  "id": 135,
  "week": 9,
  "question": "Which of the following is NOT listed as a required characteristic of a fog node?",
  "options": [
   "Storage transient",
   "Computing facility for quick decisions",
   "Network connectivity",
   "Permanent, unlimited archival storage"
  ],
  "answer": "Permanent, unlimited archival storage"
 },
 {
  "id": 136,
  "week": 10,
  "question": "In the analogy comparing humans to smart cities presented in the lecture, what do Sensors and Tags correspond to?",
  "options": [
   "Skeleton",
   "Nerves",
   "Sensory Organs",
   "Brain"
  ],
  "answer": "Sensory Organs"
 },
 {
  "id": 137,
  "week": 10,
  "question": "Which of the following is listed as one of the six Application Focus Areas of a smart city?",
  "options": [
   "Smart Economy",
   "Smart Bandwidth",
   "Smart Voltage",
   "Smart Currency"
  ],
  "answer": "Smart Economy"
 },
 {
  "id": 138,
  "week": 10,
  "question": "Under Current Focus Areas of smart cities, which application area specifically deals with the auto routing of vehicles to empty slots and detecting vacant slots?",
  "options": [
   "Smart Homes",
   "Smart Energy",
   "Smart Health",
   "Smart Parking Lots"
  ],
  "answer": "Smart Parking Lots"
 },
 {
  "id": 139,
  "week": 10,
  "question": "What is a major challenge in implementing Home Automation Systems?",
  "options": [
   "Lack of user interest",
   "Inability to connect devices to power sources",
   "Interoperability among devices from different manufacturers",
   "High availability of standardized protocols"
  ],
  "answer": "Interoperability among devices from different manufacturers"
 },
 {
  "id": 140,
  "week": 10,
  "question": "Which of the following best describes a Smart Grid integration with smart homes?",
  "options": [
   "Using smart grids to bypass local electricity providers",
   "Enabling two-way communication between the utility provider and the home to optimize energy usage",
   "Generating solar power without battery storage",
   "Replacing home appliances with high-voltage industrial equipment"
  ],
  "answer": "Enabling two-way communication between the utility provider and the home to optimize energy usage"
 },
 {
  "id": 141,
  "week": 10,
  "question": "Smart cities use IoT mainly to:",
  "options": [
   "Increase manual labor in public services",
   "Restrict communication between citizens and city officials",
   "Enhance operational efficiency, share information with the public, and improve public service quality and citizen welfare",
   "Reduce the use of digital technology in governance"
  ],
  "answer": "Enhance operational efficiency, share information with the public, and improve public service quality and citizen welfare"
 },
 {
  "id": 142,
  "week": 10,
  "question": "Which sensor type is commonly used in smart traffic management systems to detect vehicle flow?",
  "options": [
   "Humidity sensor",
   "Gas sensor",
   "Soil moisture sensor",
   "Inductive loop sensor"
  ],
  "answer": "Inductive loop sensor"
 },
 {
  "id": 143,
  "week": 10,
  "question": "What role does Fog or Edge computing play in Smart City applications?",
  "options": [
   "It processes data closer to the source, reducing latency and bandwidth usage",
   "It increases network latency by rerouting data through distant servers",
   "It replaces all cloud servers permanently",
   "It eliminates the need for sensor nodes"
  ],
  "answer": "It processes data closer to the source, reducing latency and bandwidth usage"
 },
 {
  "id": 144,
  "week": 10,
  "question": "What is the standard designated by IEEE for Wireless Access in Vehicular Environments WAVE?",
  "options": [
   "IEEE 802.11a",
   "IEEE 802.15.4",
   "IEEE 802.3",
   "IEEE 802.11p"
  ],
  "answer": "IEEE 802.11p"
 },
 {
  "id": 145,
  "week": 10,
  "question": "Which of the following is a low-power wireless communications technology operating in the 2.4 GHz band widely used in Home Area Networks HAN?",
  "options": [
   "Ethernet",
   "Bluetooth",
   "Zigbee",
   "X-10"
  ],
  "answer": "Zigbee"
 },
 {
  "id": 146,
  "week": 10,
  "question": "Which HAN standard enables remote control of compliant devices over existing power lines and electrical wiring in a house, and is mainly used for lighting and appliance control?",
  "options": [
   "Konnex KNX",
   "UPnP",
   "LonWorks",
   "X-10"
  ],
  "answer": "X-10"
 },
 {
  "id": 147,
  "week": 10,
  "question": "According to the lecture, why does traditional TCP/IP fail to work well for Vehicle-to-Everything V2X communication?",
  "options": [
   "TCP/IP was designed mainly for single-pair information exchange dependent on data location",
   "TCP/IP cannot be used with any wireless devices",
   "TCP/IP requires no IP addresses at all",
   "TCP/IP works only in stationary networks with no scalability limits"
  ],
  "answer": "TCP/IP was designed mainly for single-pair information exchange dependent on data location"
 },
 {
  "id": 148,
  "week": 10,
  "question": "Which frequency spectrum did the US Department of Transport and FCC allocate for Intelligent Connected Vehicles ICVs?",
  "options": [
   "2.4 GHz ISM band",
   "75 MHz 5850 to 5925 MHz",
   "900 MHz band",
   "60 GHz mmWave band"
  ],
  "answer": "75 MHz 5850 to 5925 MHz"
 },
 {
  "id": 149,
  "week": 10,
  "question": "In the phases of ICV development described in the lecture, which phase is based on 4G LTE or DSRC and focuses on intelligent transportation services?",
  "options": [
   "Phase-1",
   "Phase-2",
   "Phase-3",
   "Phase-0"
  ],
  "answer": "Phase-2"
 },
 {
  "id": 150,
  "week": 10,
  "question": "In the VANET domain classification, which domain consists of vehicles mobile and Road-Side Units RSUs static, communicating via V2V or V2I using the DSRC stack?",
  "options": [
   "In-Vehicle Domain",
   "Cloud Domain",
   "Infrastructure Domain",
   "Ad-hoc Domain"
  ],
  "answer": "Ad-hoc Domain"
 },
 {
  "id": 151,
  "week": 11,
  "question": "In Smart Grid SCADA systems, which layer is responsible for gathering data directly from sensors and actuators installed on power equipment?",
  "options": [
   "Control Center",
   "Communication Infrastructure",
   "Field Level / Process Level",
   "Enterprise Level"
  ],
  "answer": "Field Level / Process Level"
 },
 {
  "id": 152,
  "week": 11,
  "question": "In Smart Grid communication networks, which network domain typically connects smart meters at customer premises to local data concentrators or neighborhood aggregators?",
  "options": [
   "Wide Area Network WAN",
   "Neighborhood Area Network NAN / Field Area Network FAN",
   "Core Backbone Network",
   "Global Data Network"
  ],
  "answer": "Neighborhood Area Network NAN / Field Area Network FAN"
 },
 {
  "id": 153,
  "week": 11,
  "question": "Which component is responsible for measuring electrical parameters at customer sites and transmitting billing data in a Smart Grid architecture?",
  "options": [
   "Phasor Measurement Unit PMU",
   "Smart Meter",
   "Programmable Logic Controller PLC",
   "Human-Machine Interface HMI"
  ],
  "answer": "Smart Meter"
 },
 {
  "id": 154,
  "week": 11,
  "question": "What is the primary function of Phasor Measurement Units PMUs in a Smart Grid?",
  "options": [
   "High-frequency synchronized measurements of voltage and current phasors for real-time grid monitoring",
   "Automated customer billing",
   "Controlling household appliances based on electricity prices",
   "Physical security monitoring of power sub-stations"
  ],
  "answer": "High-frequency synchronized measurements of voltage and current phasors for real-time grid monitoring"
 },
 {
  "id": 155,
  "week": 11,
  "question": "In Smart Grid distribution automation, which device is commonly used for localized control, monitoring, and automation of substation equipment?",
  "options": [
   "Smart Phone",
   "Intelligent Electronic Device IED",
   "Cloud Server",
   "Web Browser"
  ],
  "answer": "Intelligent Electronic Device IED"
 },
 {
  "id": 156,
  "week": 11,
  "question": "Why is Demand Response DR an important feature in Smart Grids?",
  "options": [
   "It increases power transmission line losses",
   "It enables customers to adjust their electricity usage during peak periods to help balance supply and demand",
   "It replaces renewable energy generation completely",
   "It eliminates the need for any communication networks in the grid"
  ],
  "answer": "It enables customers to adjust their electricity usage during peak periods to help balance supply and demand"
 },
 {
  "id": 157,
  "week": 11,
  "question": "Which communication protocol or standard is specifically designed for substation automation and inter-device communication in power systems?",
  "options": [
   "HTTP",
   "IEC 61850",
   "SMTP",
   "FTP"
  ],
  "answer": "IEC 61850"
 },
 {
  "id": 158,
  "week": 11,
  "question": "Which of the following is a key cyber security threat specifically targeted at manipulating timestamped measurements in Smart Grid synchrophasor networks?",
  "options": [
   "E-mail phishing",
   "Time synchronization attack",
   "Data visualization attack",
   "Denial of Service DoS attack"
  ],
  "answer": "Denial of Service DoS attack"
 },
 {
  "id": 159,
  "week": 11,
  "question": "How is the Industrial Internet of Things IIoT described in the lecture?",
  "options": [
   "An application of IoT in industries that links automation systems with enterprise, planning, and product lifecycle",
   "A consumer-only network for home entertainment devices",
   "A replacement for all industrial automation without networking",
   "A system used only for storing data without machine communication"
  ],
  "answer": "An application of IoT in industries that links automation systems with enterprise, planning, and product lifecycle"
 },
 {
  "id": 160,
  "week": 11,
  "question": "Which approach does the lecture associate with IIoT for adapting existing industrial systems?",
  "options": [
   "Disconnect and isolate",
   "Rip and replace",
   "Wrap and re-use",
   "Remove and discard"
  ],
  "answer": "Wrap and re-use"
 },
 {
  "id": 161,
  "week": 11,
  "question": "According to the lecture, which technology is identified as the key enabling technology for vehicle-to-vehicle and vehicle-to-road communications in Intelligent Transportation Systems?",
  "options": [
   "Universal Power Line Bus",
   "Hadoop Distributed File System HDFS",
   "Supervisory Control and Data Acquisition SCADA",
   "Dedicated Short-Range Communications DSRC"
  ],
  "answer": "Dedicated Short-Range Communications DSRC"
 },
 {
  "id": 162,
  "week": 11,
  "question": "In IIoT-based mining applications, which environmental parameters can be monitored using wireless sensor networks?",
  "options": [
   "Air quality, poisonous gases, and oxygen level inside mines",
   "Only the billing amount of mine workers",
   "Only the color of mining equipment",
   "Only the internet browsing history of operators"
  ],
  "answer": "Air quality, poisonous gases, and oxygen level inside mines"
 },
 {
  "id": 163,
  "week": 11,
  "question": "Which Big Data characteristic refers to biases, noise, and abnormality in data?",
  "options": [
   "Value",
   "Variability",
   "Veracity",
   "Volume"
  ],
  "answer": "Veracity"
 },
 {
  "id": 164,
  "week": 11,
  "question": "During data pre-processing, what is the purpose of redundancy mitigation?",
  "options": [
   "To prevent data from being collected",
   "To intentionally duplicate every data item",
   "To convert all structured data into images",
   "To eliminate repeated data through detection, filtering, and compression"
  ],
  "answer": "To eliminate repeated data through detection, filtering, and compression"
 },
 {
  "id": 165,
  "week": 11,
  "question": "In Hadoop Distributed File System HDFS, which node stores the actual data blocks?",
  "options": [
   "Datanode",
   "Namenode",
   "Job Tracker",
   "YARN Resource Negotiator only"
  ],
  "answer": "Datanode"
 },
 {
  "id": 166,
  "week": 12,
  "question": "Which type of data analysis is used for data that is categorical in nature?",
  "options": [
   "Qualitative analysis",
   "Quantitative analysis",
   "Regression analysis",
   "Analysis of variance"
  ],
  "answer": "Qualitative analysis"
 },
 {
  "id": 167,
  "week": 12,
  "question": "According to the lecture, when is a statistical model classified as a complete model?",
  "options": [
   "When the number of variables equals the number of equations",
   "When the model contains no variables",
   "When the number of variables is always greater than the number of equations",
   "When only categorical data are used"
  ],
  "answer": "When the number of variables equals the number of equations"
 },
 {
  "id": 168,
  "week": 12,
  "question": "Analysis of Variance ANOVA is best applied when which of the following are to be compared?",
  "options": [
   "Only a single observation",
   "More than two populations or samples",
   "Only non-numerical labels without any response variable",
   "Only identical copies of the same observation"
  ],
  "answer": "More than two populations or samples"
 },
 {
  "id": 169,
  "week": 12,
  "question": "In regression analysis, what does a linear regression model assume between the independent and dependent variables?",
  "options": [
   "A quadratic relationship",
   "A non-linear exponential relationship",
   "A straight-line relationship",
   "No relationship at all"
  ],
  "answer": "A straight-line relationship"
 },
 {
  "id": 170,
  "week": 12,
  "question": "In an agricultural IoT deployment, what is the primary role of soil moisture sensors?",
  "options": [
   "To calculate farm taxation",
   "To predict global commodity market prices",
   "To record audio signals from crops",
   "To measure the volumetric water content in soil for optimal irrigation"
  ],
  "answer": "To measure the volumetric water content in soil for optimal irrigation"
 },
 {
  "id": 171,
  "week": 12,
  "question": "Which of the following is an example of an actuator used in smart agriculture systems?",
  "options": [
   "Temperature sensor",
   "Solenoid valve for automated water release",
   "Light-dependent resistor",
   "Soil pH probe"
  ],
  "answer": "Solenoid valve for automated water release"
 },
 {
  "id": 172,
  "week": 12,
  "question": "In IoT-enabled healthcare monitoring, what is the function of a Pulse Oximeter sensor?",
  "options": [
   "To measure atmospheric pressure",
   "To measure blood oxygen saturation level SpO2 and pulse rate",
   "To track ambient room temperature",
   "To detect movement of furniture"
  ],
  "answer": "To measure blood oxygen saturation level SpO2 and pulse rate"
 },
 {
  "id": 173,
  "week": 12,
  "question": "Which wireless communication technology is commonly preferred for short-range transmission between wearable health sensors and a patient smartphone gateway?",
  "options": [
   "Satellite link",
   "Microwave link",
   "Bluetooth Low Energy BLE",
   "Coaxial cable"
  ],
  "answer": "Bluetooth Low Energy BLE"
 },
 {
  "id": 174,
  "week": 12,
  "question": "In human activity monitoring, which sensor is most widely used to detect motion, posture, and step counts?",
  "options": [
   "Gas sensor",
   "Ultrasonic liquid sensor",
   "Soil moisture sensor",
   "3-axis Accelerometer"
  ],
  "answer": "3-axis Accelerometer"
 },
 {
  "id": 175,
  "week": 12,
  "question": "What is a major challenge in real-time healthcare monitoring using IoT devices?",
  "options": [
   "Ensuring data privacy, security, and low-latency critical alerts",
   "Absence of any wireless protocols",
   "Excess battery life on all sensor tags",
   "Inability of computers to store numerical values"
  ],
  "answer": "Ensuring data privacy, security, and low-latency critical alerts"
 },
 {
  "id": 176,
  "week": 12,
  "question": "What is an advantage of continuous activity monitoring?",
  "options": [
   "It requires all sensor data to be discarded immediately",
   "It prevents any long-term observation",
   "It enables daily observation of human behavior and repetitive activity patterns",
   "It can operate only with cameras"
  ],
  "answer": "It enables daily observation of human behavior and repetitive activity patterns"
 },
 {
  "id": 177,
  "week": 12,
  "question": "Which type of data can be analyzed using the deep-learning-based approach described in the lecture?",
  "options": [
   "Sensor data, images, and videos",
   "Images only",
   "Text labels only",
   "Sensor data only and never images or videos"
  ],
  "answer": "Sensor data, images, and videos"
 },
 {
  "id": 178,
  "week": 12,
  "question": "Processing activity-monitoring sensor data directly on the device is referred to as which approach?",
  "options": [
   "Data-aggregator selection approach",
   "Network-only approach",
   "Cloud replication approach",
   "In-place approach"
  ],
  "answer": "In-place approach"
 },
 {
  "id": 179,
  "week": 12,
  "question": "What are the three basic elements used in the smartphone-based activity-monitoring demonstration?",
  "options": [
   "A soil-moisture sensor, a pump, and a paddy field",
   "A smart meter, a PMU, and a power plant",
   "A smartphone, a network, and a remote server",
   "A Hadoop Namenode, Datanode, and Job Tracker"
  ],
  "answer": "A smartphone, a network, and a remote server"
 },
 {
  "id": 180,
  "week": 12,
  "question": "Which sensor values are specifically logged in the activity-monitoring demonstration described in the lecture?",
  "options": [
   "Accelerometer values",
   "Soil-moisture values",
   "Smart-grid voltage phasors",
   "Water-level values"
  ],
  "answer": "Accelerometer values"
 }
];
