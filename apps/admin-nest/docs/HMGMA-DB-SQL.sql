--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-06-11 15:01:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 915 (class 1247 OID 16666)
-- Name: brain_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.brain_enum AS ENUM (
    'MAIN',
    'SPARE'
);


ALTER TYPE public.brain_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 16516)
-- Name: cpu_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cpu_status (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    name character varying(200) NOT NULL,
    usage double precision,
    unit character varying(50) DEFAULT '%'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.cpu_status OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16515)
-- Name: cpu_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cpu_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cpu_status_id_seq OWNER TO postgres;

--
-- TOC entry 5079 (class 0 OID 0)
-- Dependencies: 225
-- Name: cpu_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cpu_status_id_seq OWNED BY public.cpu_status.id;


--
-- TOC entry 240 (class 1259 OID 16615)
-- Name: driver; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.driver (
    id integer NOT NULL,
    image character varying,
    name character varying(200) NOT NULL,
    version character varying(200),
    "driverUpdatedAt" timestamp with time zone DEFAULT now(),
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.driver OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16614)
-- Name: driver_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.driver_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.driver_id_seq OWNER TO postgres;

--
-- TOC entry 5080 (class 0 OID 0)
-- Dependencies: 239
-- Name: driver_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.driver_id_seq OWNED BY public.driver.id;


--
-- TOC entry 228 (class 1259 OID 16525)
-- Name: gpu_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gpu_status (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    name character varying(200) NOT NULL,
    usage double precision,
    unit character varying(50) DEFAULT '%'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.gpu_status OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16524)
-- Name: gpu_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gpu_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gpu_status_id_seq OWNER TO postgres;

--
-- TOC entry 5081 (class 0 OID 0)
-- Dependencies: 227
-- Name: gpu_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gpu_status_id_seq OWNED BY public.gpu_status.id;


--
-- TOC entry 218 (class 1259 OID 16393)
-- Name: line; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.line (
    id integer NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.line OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16392)
-- Name: line_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.line_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.line_id_seq OWNER TO postgres;

--
-- TOC entry 5082 (class 0 OID 0)
-- Dependencies: 217
-- Name: line_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.line_id_seq OWNED BY public.line.id;


--
-- TOC entry 232 (class 1259 OID 16543)
-- Name: network_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.network_status (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    send double precision,
    receive double precision,
    unit character varying DEFAULT 'Kbps'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.network_status OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16542)
-- Name: network_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.network_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.network_status_id_seq OWNER TO postgres;

--
-- TOC entry 5083 (class 0 OID 0)
-- Dependencies: 231
-- Name: network_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.network_status_id_seq OWNED BY public.network_status.id;


--
-- TOC entry 224 (class 1259 OID 16479)
-- Name: pc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pc (
    id integer NOT NULL,
    "serialNumber" character varying(200) NOT NULL,
    "lineId" integer NOT NULL,
    "positionId" integer NOT NULL,
    "processId" integer NOT NULL,
    brain public.brain_enum NOT NULL,
    "isLicense" boolean NOT NULL,
    "isNetwork" boolean NOT NULL,
    "isProgram" boolean NOT NULL,
    "anydeskIp" character varying(200) NOT NULL,
    ipv4 character varying(200) NOT NULL,
    "activeServer" character varying(200) NOT NULL,
    "launcherUpdatedAt" timestamp with time zone DEFAULT now(),
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.pc OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 16647)
-- Name: pc_driver; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pc_driver (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    "driverId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.pc_driver OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 16646)
-- Name: pc_driver_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pc_driver_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pc_driver_id_seq OWNER TO postgres;

--
-- TOC entry 5084 (class 0 OID 0)
-- Dependencies: 243
-- Name: pc_driver_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pc_driver_id_seq OWNED BY public.pc_driver.id;


--
-- TOC entry 223 (class 1259 OID 16478)
-- Name: pc_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pc_id_seq OWNER TO postgres;

--
-- TOC entry 5085 (class 0 OID 0)
-- Dependencies: 223
-- Name: pc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pc_id_seq OWNED BY public.pc.id;


--
-- TOC entry 242 (class 1259 OID 16626)
-- Name: pc_program; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pc_program (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    "programId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.pc_program OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16625)
-- Name: pc_program_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pc_program_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pc_program_id_seq OWNER TO postgres;

--
-- TOC entry 5086 (class 0 OID 0)
-- Dependencies: 241
-- Name: pc_program_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pc_program_id_seq OWNED BY public.pc_program.id;


--
-- TOC entry 222 (class 1259 OID 16422)
-- Name: position; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."position" (
    id integer NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."position" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16421)
-- Name: position_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.position_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.position_id_seq OWNER TO postgres;

--
-- TOC entry 5087 (class 0 OID 0)
-- Dependencies: 221
-- Name: position_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.position_id_seq OWNED BY public."position".id;


--
-- TOC entry 220 (class 1259 OID 16401)
-- Name: process; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.process (
    id integer NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.process OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16400)
-- Name: process_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.process_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.process_id_seq OWNER TO postgres;

--
-- TOC entry 5088 (class 0 OID 0)
-- Dependencies: 219
-- Name: process_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.process_id_seq OWNED BY public.process.id;


--
-- TOC entry 238 (class 1259 OID 16603)
-- Name: program; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.program (
    id integer NOT NULL,
    image character varying,
    name character varying(200) NOT NULL,
    version character varying(200),
    "programUpdatedAt" timestamp with time zone DEFAULT now(),
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.program OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16602)
-- Name: program_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.program_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.program_id_seq OWNER TO postgres;

--
-- TOC entry 5089 (class 0 OID 0)
-- Dependencies: 237
-- Name: program_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.program_id_seq OWNED BY public.program.id;


--
-- TOC entry 230 (class 1259 OID 16534)
-- Name: ram_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ram_status (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    total double precision,
    current double precision,
    average double precision,
    lowest double precision,
    highest double precision,
    unit character varying(50) DEFAULT 'GB'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.ram_status OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16533)
-- Name: ram_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ram_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ram_status_id_seq OWNER TO postgres;

--
-- TOC entry 5090 (class 0 OID 0)
-- Dependencies: 229
-- Name: ram_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ram_status_id_seq OWNED BY public.ram_status.id;


--
-- TOC entry 236 (class 1259 OID 16562)
-- Name: storage_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.storage_status (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    name character varying(200) NOT NULL,
    total double precision,
    usage double precision,
    unit character varying(50) DEFAULT 'GB'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.storage_status OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16561)
-- Name: storage_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.storage_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.storage_status_id_seq OWNER TO postgres;

--
-- TOC entry 5091 (class 0 OID 0)
-- Dependencies: 235
-- Name: storage_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.storage_status_id_seq OWNED BY public.storage_status.id;


--
-- TOC entry 234 (class 1259 OID 16553)
-- Name: temp_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.temp_status (
    id integer NOT NULL,
    "pcId" integer NOT NULL,
    current double precision,
    average double precision,
    lowest double precision,
    highest double precision,
    unit character varying(50) DEFAULT '°C'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.temp_status OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16552)
-- Name: temp_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.temp_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.temp_status_id_seq OWNER TO postgres;

--
-- TOC entry 5092 (class 0 OID 0)
-- Dependencies: 233
-- Name: temp_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.temp_status_id_seq OWNED BY public.temp_status.id;


--
-- TOC entry 4823 (class 2604 OID 16519)
-- Name: cpu_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpu_status ALTER COLUMN id SET DEFAULT nextval('public.cpu_status_id_seq'::regclass);


--
-- TOC entry 4851 (class 2604 OID 16618)
-- Name: driver id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.driver ALTER COLUMN id SET DEFAULT nextval('public.driver_id_seq'::regclass);


--
-- TOC entry 4827 (class 2604 OID 16528)
-- Name: gpu_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gpu_status ALTER COLUMN id SET DEFAULT nextval('public.gpu_status_id_seq'::regclass);


--
-- TOC entry 4810 (class 2604 OID 16396)
-- Name: line id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.line ALTER COLUMN id SET DEFAULT nextval('public.line_id_seq'::regclass);


--
-- TOC entry 4835 (class 2604 OID 16546)
-- Name: network_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.network_status ALTER COLUMN id SET DEFAULT nextval('public.network_status_id_seq'::regclass);


--
-- TOC entry 4819 (class 2604 OID 16482)
-- Name: pc id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc ALTER COLUMN id SET DEFAULT nextval('public.pc_id_seq'::regclass);


--
-- TOC entry 4858 (class 2604 OID 16650)
-- Name: pc_driver id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_driver ALTER COLUMN id SET DEFAULT nextval('public.pc_driver_id_seq'::regclass);


--
-- TOC entry 4855 (class 2604 OID 16629)
-- Name: pc_program id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_program ALTER COLUMN id SET DEFAULT nextval('public.pc_program_id_seq'::regclass);


--
-- TOC entry 4816 (class 2604 OID 16425)
-- Name: position id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position" ALTER COLUMN id SET DEFAULT nextval('public.position_id_seq'::regclass);


--
-- TOC entry 4813 (class 2604 OID 16404)
-- Name: process id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process ALTER COLUMN id SET DEFAULT nextval('public.process_id_seq'::regclass);


--
-- TOC entry 4847 (class 2604 OID 16606)
-- Name: program id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.program ALTER COLUMN id SET DEFAULT nextval('public.program_id_seq'::regclass);


--
-- TOC entry 4831 (class 2604 OID 16537)
-- Name: ram_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_status ALTER COLUMN id SET DEFAULT nextval('public.ram_status_id_seq'::regclass);


--
-- TOC entry 4843 (class 2604 OID 16565)
-- Name: storage_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.storage_status ALTER COLUMN id SET DEFAULT nextval('public.storage_status_id_seq'::regclass);


--
-- TOC entry 4839 (class 2604 OID 16556)
-- Name: temp_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.temp_status ALTER COLUMN id SET DEFAULT nextval('public.temp_status_id_seq'::regclass);


--
-- TOC entry 5055 (class 0 OID 16516)
-- Dependencies: 226
-- Data for Name: cpu_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cpu_status (id, "pcId", name, usage, unit, "createdAt", "updatedAt") FROM stdin;
5	1	i7-00001	10	%	2025-06-10 14:06:43.329224+09	2025-06-10 18:09:33.634804+09
6	2	i7-00002	20	%	2025-06-10 14:06:43.329224+09	2025-06-10 18:09:33.634804+09
7	3	i7-00003	30	%	2025-06-10 14:07:03.691756+09	2025-06-10 18:09:33.634804+09
8	4	i7-00004	40	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
9	5	i7-00005	50	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
10	6	i7-00006	60	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
11	7	i7-00007	70	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
12	8	i7-00008	80	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
13	9	i7-00009	90	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
14	10	i7-00010	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
15	11	i7-00011	11	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
16	12	i7-00012	21	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
17	13	i7-00013	31	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
18	14	i7-00014	41	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
19	15	i7-00015	51	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
20	16	i7-00016	61	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
21	17	i7-00017	71	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
22	18	i7-00018	81	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
23	19	i7-00019	91	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
24	20	i7-00020	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
25	21	i7-00021	12	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
26	22	i7-00022	22	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
27	23	i7-00023	32	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
28	24	i7-00024	42	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
29	25	i7-00025	52	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
30	26	i7-00026	62	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
31	27	i7-00027	72	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
32	28	i7-00028	82	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
33	29	i7-00029	92	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
34	30	i7-00030	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
35	31	i7-00031	13	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
36	32	i7-00032	23	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
37	33	i7-00033	33	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
38	34	i7-00034	43	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
39	35	i7-00035	53	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
40	36	i7-00036	63	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
41	37	i7-00037	73	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
42	38	i7-00038	83	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
43	39	i7-00039	93	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
44	40	i7-00040	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
45	41	i7-00041	14	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
46	42	i7-00042	24	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
47	43	i7-00043	34	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
48	44	i7-00044	54	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
49	45	i7-00045	64	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
50	46	i7-00046	74	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
51	47	i7-00047	84	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
52	48	i7-00048	94	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
53	49	i7-00049	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
54	50	i7-00050	15	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
55	51	i7-00051	25	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
56	52	i7-00052	35	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
57	53	i7-00053	45	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
58	54	i7-00054	55	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
59	55	i7-00055	65	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
60	56	i7-00056	75	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
61	57	i7-00057	85	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
62	58	i7-00058	95	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
63	59	i7-00059	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
64	60	i7-00060	16	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
65	61	i7-00061	26	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
66	62	i7-00062	36	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
67	63	i7-00063	46	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
68	64	i7-00064	56	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
69	65	i7-00065	66	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
70	66	i7-00066	76	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
71	67	i7-00067	86	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
72	68	i7-00068	96	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
73	69	i7-00069	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
74	70	i7-00070	17	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
75	71	i7-00071	27	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
76	72	i7-00072	37	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
77	73	i7-00073	47	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
78	74	i7-00074	57	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
79	75	i7-00075	67	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
80	76	i7-00076	77	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
81	77	i7-00077	87	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
82	78	i7-00078	97	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
83	79	i7-00079	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
84	80	i7-00080	18	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
85	81	i7-00081	28	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
86	82	i7-00082	38	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
87	83	i7-00083	48	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
88	84	i7-00084	58	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
89	85	i7-00085	68	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
90	86	i7-00086	78	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
91	87	i7-00087	88	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
92	88	i7-00088	98	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
93	89	i7-00089	100	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
94	90	i7-00090	19	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
95	91	i7-00091	29	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
96	92	i7-00092	39	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
97	93	i7-00093	49	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
98	94	i7-00094	59	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
99	95	i7-00095	69	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
100	96	i7-00096	79	%	2025-06-10 14:15:56.578449+09	2025-06-10 18:09:33.634804+09
\.


--
-- TOC entry 5069 (class 0 OID 16615)
-- Dependencies: 240
-- Data for Name: driver; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.driver (id, image, name, version, "driverUpdatedAt", "createdAt", "updatedAt") FROM stdin;
1	/mockup/msvc.svg	Msvc 2012 Redistritable (x86)	11.0.61030	2025-06-10 14:16:43.914518+09	2025-06-10 14:16:43.914518+09	2025-06-10 18:10:19.322375+09
2	/mockup/cudnn.svg	CUDNN 2012	0.0.1	2025-06-10 14:19:00.121681+09	2025-06-10 14:19:00.121681+09	2025-06-10 18:10:19.322375+09
3	/mockup/cuda.svg	CUDA 2012	0.1.0	2025-06-10 14:19:20.556826+09	2025-06-10 14:19:20.556826+09	2025-06-10 18:10:19.322375+09
\.


--
-- TOC entry 5057 (class 0 OID 16525)
-- Dependencies: 228
-- Data for Name: gpu_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gpu_status (id, "pcId", name, usage, unit, "createdAt", "updatedAt") FROM stdin;
1	96	RTX4080 S	78	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
2	95	RTX4080 S	68	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
3	94	RTX4080 S	58	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
4	93	RTX4080 S	48	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
5	92	RTX4080 S	38	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
6	91	RTX4080 S	28	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
7	90	RTX4080 S	18	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
8	89	RTX4080 S	8	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
9	88	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
10	87	RTX4080 S	97	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
11	86	RTX4080 S	87	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
12	85	RTX4080 S	77	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
13	84	RTX4080 S	67	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
14	83	RTX4080 S	57	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
15	82	RTX4080 S	47	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
16	81	RTX4080 S	37	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
17	80	RTX4080 S	27	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
18	79	RTX4080 S	17	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
19	78	RTX4080 S	7	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
20	77	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
21	76	RTX4080 S	96	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
22	75	RTX4080 S	86	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
23	74	RTX4080 S	76	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
24	73	RTX4080 S	66	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
25	72	RTX4080 S	56	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
26	71	RTX4080 S	46	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
27	70	RTX4080 S	36	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
28	69	RTX4080 S	26	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
29	68	RTX4080 S	16	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
30	67	RTX4080 S	6	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
31	66	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
32	65	RTX4080 S	95	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
33	64	RTX4080 S	85	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
34	63	RTX4080 S	75	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
35	62	RTX4080 S	65	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
36	61	RTX4080 S	55	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
37	60	RTX4080 S	45	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
38	59	RTX4080 S	35	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
39	58	RTX4080 S	25	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
40	57	RTX4080 S	15	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
41	56	RTX4080 S	5	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
42	55	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
43	54	RTX4080 S	94	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
44	53	RTX4080 S	84	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
45	52	RTX4080 S	74	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
46	51	RTX4080 S	64	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
47	50	RTX4080 S	54	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
48	49	RTX4080 S	44	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
49	48	RTX4080 S	34	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
50	47	RTX4080 S	24	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
51	46	RTX4080 S	14	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
52	45	RTX4080 S	4	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
53	44	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
54	43	RTX4080 S	93	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
55	42	RTX4080 S	83	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
56	41	RTX4080 S	73	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
57	40	RTX4080 S	63	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
58	39	RTX4080 S	53	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
59	38	RTX4080 S	43	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
60	37	RTX4080 S	33	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
61	36	RTX4080 S	23	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
62	35	RTX4080 S	13	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
63	34	RTX4080 S	3	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
64	33	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
65	32	RTX4080 S	92	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
66	31	RTX4080 S	82	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
67	30	RTX4080 S	72	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
68	29	RTX4080 S	62	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
69	28	RTX4080 S	52	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
70	27	RTX4080 S	42	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
71	26	RTX4080 S	32	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
72	25	RTX4080 S	22	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
73	24	RTX4080 S	12	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
74	23	RTX4080 S	2	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
75	22	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
76	21	RTX4080 S	91	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
77	20	RTX4080 S	81	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
78	19	RTX4080 S	71	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
79	18	RTX4080 S	61	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
80	17	RTX4080 S	51	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
81	16	RTX4080 S	41	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
82	15	RTX4080 S	31	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
83	14	RTX4080 S	21	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
84	13	RTX4080 S	11	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
85	12	RTX4080 S	1	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
86	11	RTX4080 S	100	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
87	10	RTX4080 S	90	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
88	9	RTX4080 S	80	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
89	8	RTX4080 S	70	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
90	7	RTX4080 S	60	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
91	6	RTX4080 S	50	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
92	5	RTX4080 S	40	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
93	4	RTX4080 S	30	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
94	3	RTX4080 S	20	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
95	2	RTX4080 S	10	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
96	1	RTX4080 S	0	%	2025-06-10 14:35:08.849146+09	2025-06-10 18:10:32.916062+09
\.


--
-- TOC entry 5047 (class 0 OID 16393)
-- Dependencies: 218
-- Data for Name: line; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.line (id, code, name, "createdAt", "updatedAt") FROM stdin;
1	ONE	1	2025-06-09 19:37:44.038267+09	2025-06-10 18:10:52.201525+09
2	TWO	2	2025-06-09 19:37:44.038267+09	2025-06-10 18:10:52.201525+09
3	PANORAMA	PANORAMA	2025-06-09 19:37:44.038267+09	2025-06-10 18:10:52.201525+09
\.


--
-- TOC entry 5061 (class 0 OID 16543)
-- Dependencies: 232
-- Data for Name: network_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.network_status (id, "pcId", send, receive, unit, "createdAt", "updatedAt") FROM stdin;
9	96	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
10	95	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
11	94	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
12	93	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
13	92	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
14	91	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
15	90	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
16	89	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
17	88	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
18	87	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
19	86	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
20	85	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
21	84	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
22	83	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
23	82	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
24	81	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
25	80	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
26	79	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
27	78	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
28	77	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
29	76	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
30	75	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
31	74	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
32	73	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
33	72	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
34	71	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
35	70	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
36	69	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
37	68	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
38	67	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
39	66	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
40	65	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
41	64	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
42	63	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
43	62	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
44	61	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
45	60	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
46	59	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
47	58	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
48	57	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
49	56	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
50	55	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
51	54	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
52	53	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
53	52	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
54	51	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
55	50	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
56	49	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
57	48	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
58	47	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
59	46	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
60	45	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
61	44	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
62	43	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
63	42	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
64	41	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
65	40	490	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
66	39	480	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
67	38	470	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
68	37	460	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
69	36	450	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
70	35	440	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
71	34	430	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
72	33	420	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
73	32	410	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
74	31	400	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
75	30	390	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
76	29	380	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
77	28	370	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
78	27	360	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
79	26	350	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
80	25	340	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
81	24	330	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
82	23	320	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
83	22	310	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
84	21	300	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
85	20	290	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
86	19	280	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
87	18	270	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
88	17	260	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
89	16	250	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
90	15	240	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
91	14	230	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
92	13	220	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
93	12	210	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
94	11	200	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
95	10	190	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
96	9	180	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
97	8	170	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
98	7	160	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
99	6	150	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
100	5	140	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
101	4	130	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
102	3	120	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
103	2	110	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
104	1	100	123.45	Kbps	2025-06-10 14:15:56.578449+09	2025-06-10 18:11:03.552304+09
\.


--
-- TOC entry 5053 (class 0 OID 16479)
-- Dependencies: 224
-- Data for Name: pc; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pc (id, "serialNumber", "lineId", "positionId", "processId", brain, "isLicense", "isNetwork", "isProgram", "anydeskIp", ipv4, "activeServer", "launcherUpdatedAt", "createdAt", "updatedAt") FROM stdin;
3	CB2404F0003M	1	1	2	MAIN	t	t	t	0 000 000 003	000.000.000.03	000.000.000.003	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
4	CB2404F0004M	1	1	2	SPARE	f	f	f	0 000 000 004	000.000.000.04	000.000.000.004	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
1	CB2404F0001M	1	1	1	MAIN	t	t	t	0 000 000 001	000.000.000.01	000.000.000.001	2025-06-10 13:17:00.408679+09	2025-06-10 13:17:00.408679+09	2025-06-10 18:11:16.995454+09
2	CB2404F0002M	1	1	1	SPARE	t	t	t	0 000 000 002	000.000.000.02	000.000.000.002	2025-06-10 13:18:20.643199+09	2025-06-10 13:18:20.643199+09	2025-06-10 18:11:16.995454+09
62	CB2404F0062M	3	2	1	MAIN	t	t	f	0 000 000 062	000.000.000.62	000.000.000.062	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
63	CB2404F0063M	3	2	1	SPARE	t	t	t	0 000 000 063	000.000.000.63	000.000.000.063	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
64	CB2404F0064M	3	2	2	MAIN	f	t	t	0 000 000 064	000.000.000.64	000.000.000.064	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
65	CB2404F0065M	3	2	2	SPARE	t	t	t	0 000 000 065	000.000.000.65	000.000.000.065	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
66	CB2404F0066M	3	2	3	MAIN	t	t	t	0 000 000 066	000.000.000.66	000.000.000.066	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
67	CB2404F0067M	3	2	3	SPARE	t	t	t	0 000 000 067	000.000.000.67	000.000.000.067	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
68	CB2404F0068M	3	2	4	MAIN	t	t	t	0 000 000 068	000.000.000.68	000.000.000.068	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
69	CB2404F0069M	3	2	4	SPARE	t	t	f	0 000 000 069	000.000.000.69	000.000.000.069	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
70	CB2404F0070M	3	3	1	MAIN	t	f	t	0 000 000 070	000.000.000.70	000.000.000.070	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
71	CB2404F0071M	3	3	1	SPARE	t	t	f	0 000 000 071	000.000.000.71	000.000.000.071	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
72	CB2404F0072M	3	3	2	MAIN	t	t	t	0 000 000 072	000.000.000.72	000.000.000.072	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
73	CB2404F0073M	3	3	2	SPARE	t	t	t	0 000 000 073	000.000.000.73	000.000.000.073	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
74	CB2404F0074M	3	3	3	MAIN	t	t	t	0 000 000 074	000.000.000.74	000.000.000.074	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
75	CB2404F0075M	3	3	4	MAIN	t	t	t	0 000 000 075	000.000.000.75	000.000.000.075	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
76	CB2404F0076M	3	3	4	SPARE	t	t	t	0 000 000 076	000.000.000.76	000.000.000.076	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
77	CB2404F0077M	3	4	1	MAIN	t	t	t	0 000 000 077	000.000.000.77	000.000.000.077	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
78	CB2404F0078M	3	4	1	SPARE	t	t	t	0 000 000 078	000.000.000.78	000.000.000.078	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
79	CB2404F0079M	3	4	2	MAIN	t	t	t	0 000 000 079	000.000.000.79	000.000.000.079	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
80	CB2404F0080M	3	4	2	SPARE	f	t	t	0 000 000 080	000.000.000.80	000.000.000.080	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
81	CB2404F0081M	3	4	3	MAIN	t	t	t	0 000 000 081	000.000.000.81	000.000.000.081	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
82	CB2404F0082M	3	4	3	SPARE	t	t	t	0 000 000 082	000.000.000.82	000.000.000.082	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
83	CB2404F0083M	3	4	4	MAIN	t	f	t	0 000 000 083	000.000.000.83	000.000.000.083	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
5	CB2404F0005M	1	1	3	MAIN	t	t	t	0 000 000 005	000.000.000.05	000.000.000.005	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
6	CB2404F0006M	1	1	3	SPARE	t	t	t	0 000 000 006	000.000.000.06	000.000.000.006	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
7	CB2404F0007M	1	1	4	MAIN	t	t	f	0 000 000 007	000.000.000.07	000.000.000.007	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
8	CB2404F0008M	1	1	4	SPARE	t	t	t	0 000 000 008	000.000.000.08	000.000.000.008	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
9	CB2404F0009M	1	2	1	MAIN	f	t	f	0 000 000 009	000.000.000.09	000.000.000.009	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
10	CB2404F0010M	1	2	1	SPARE	t	t	t	0 000 000 010	000.000.000.10	000.000.000.010	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
11	CB2404F0011M	1	2	2	MAIN	t	t	t	0 000 000 011	000.000.000.11	000.000.000.011	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
12	CB2404F0012M	1	2	2	SPARE	f	t	f	0 000 000 012	000.000.000.12	000.000.000.012	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
13	CB2404F0013M	1	2	3	MAIN	t	t	t	0 000 000 013	000.000.000.13	000.000.000.013	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
14	CB2404F0014M	1	2	3	SPARE	t	f	t	0 000 000 014	000.000.000.14	000.000.000.014	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
15	CB2404F0015M	1	2	4	MAIN	t	t	t	0 000 000 015	000.000.000.15	000.000.000.015	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
16	CB2404F0016M	1	2	4	SPARE	t	f	t	0 000 000 016	000.000.000.16	000.000.000.016	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
17	CB2404F0017M	1	3	1	MAIN	f	t	t	0 000 000 017	000.000.000.17	000.000.000.017	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
18	CB2404F0018M	1	3	1	SPARE	t	t	t	0 000 000 018	000.000.000.18	000.000.000.018	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
19	CB2404F0019M	1	3	2	MAIN	t	f	t	0 000 000 019	000.000.000.19	000.000.000.019	2025-06-10 13:27:52.032185+09	2025-06-10 13:27:52.032185+09	2025-06-10 18:11:16.995454+09
20	CB2404F0020M	1	3	3	MAIN	t	t	t	0 000 000 020	000.000.000.20	000.000.000.020	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
21	CB2404F0021M	1	3	3	SPARE	t	t	t	0 000 000 021	000.000.000.21	000.000.000.021	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
22	CB2404F0022M	2	1	1	MAIN	t	t	t	0 000 000 022	000.000.000.22	000.000.000.022	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
23	CB2404F0023M	2	1	1	SPARE	t	t	t	0 000 000 023	000.000.000.23	000.000.000.023	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
24	CB2404F0024M	2	1	2	MAIN	t	t	t	0 000 000 024	000.000.000.24	000.000.000.024	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
25	CB2404F0025M	2	1	2	SPARE	t	t	t	0 000 000 025	000.000.000.25	000.000.000.025	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
26	CB2404F0026M	2	1	3	MAIN	t	t	t	0 000 000 026	000.000.000.26	000.000.000.026	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
27	CB2404F0027M	2	1	3	SPARE	t	t	t	0 000 000 027	000.000.000.27	000.000.000.027	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
28	CB2404F0028M	2	1	4	MAIN	t	f	t	0 000 000 028	000.000.000.28	000.000.000.028	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
29	CB2404F0029M	2	1	4	SPARE	t	t	t	0 000 000 029	000.000.000.29	000.000.000.029	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
30	CB2404F0030M	2	2	1	MAIN	t	t	t	0 000 000 030	000.000.000.30	000.000.000.030	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
31	CB2404F0031M	2	2	1	SPARE	t	t	t	0 000 000 031	000.000.000.31	000.000.000.031	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
32	CB2404F0032M	2	2	2	MAIN	t	t	t	0 000 000 032	000.000.000.32	000.000.000.032	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
33	CB2404F0033M	2	2	2	SPARE	t	t	t	0 000 000 033	000.000.000.33	000.000.000.033	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
34	CB2404F0034M	2	2	3	MAIN	t	t	f	0 000 000 034	000.000.000.34	000.000.000.034	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
35	CB2404F0035M	2	2	3	SPARE	t	t	f	0 000 000 035	000.000.000.35	000.000.000.035	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
36	CB2404F0036M	2	2	4	MAIN	t	t	f	0 000 000 036	000.000.000.36	000.000.000.036	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
37	CB2404F0037M	2	2	4	SPARE	t	t	f	0 000 000 037	000.000.000.37	000.000.000.037	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
38	CB2404F0038M	2	3	1	MAIN	t	t	t	0 000 000 038	000.000.000.38	000.000.000.038	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
39	CB2404F0039M	2	3	1	SPARE	t	t	f	0 000 000 039	000.000.000.39	000.000.000.039	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
40	CB2404F0040M	2	3	2	MAIN	t	t	t	0 000 000 040	000.000.000.40	000.000.000.040	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
41	CB2404F0041M	2	3	2	SPARE	t	t	f	0 000 000 041	000.000.000.41	000.000.000.041	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
42	CB2404F0042M	2	3	3	MAIN	t	f	t	0 000 000 042	000.000.000.42	000.000.000.042	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
43	CB2404F0043M	2	3	3	SPARE	t	t	t	0 000 000 043	000.000.000.43	000.000.000.043	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
44	CB2404F0044M	2	3	4	MAIN	t	f	t	0 000 000 044	000.000.000.44	000.000.000.044	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
45	CB2404F0045M	2	3	4	SPARE	t	t	t	0 000 000 045	000.000.000.45	000.000.000.045	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
46	CB2404F0046M	2	4	1	MAIN	t	t	t	0 000 000 046	000.000.000.46	000.000.000.046	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
47	CB2404F0047M	2	4	1	SPARE	t	t	t	0 000 000 047	000.000.000.47	000.000.000.047	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
48	CB2404F0048M	2	4	2	MAIN	t	t	t	0 000 000 048	000.000.000.48	000.000.000.048	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
49	CB2404F0049M	2	4	2	SPARE	t	t	t	0 000 000 049	000.000.000.49	000.000.000.049	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
50	CB2404F0050M	2	4	3	MAIN	t	t	t	0 000 000 050	000.000.000.50	000.000.000.050	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
51	CB2404F0051M	2	4	3	SPARE	f	f	t	0 000 000 051	000.000.000.51	000.000.000.051	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
52	CB2404F0052M	2	4	4	MAIN	f	t	t	0 000 000 052	000.000.000.52	000.000.000.052	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
53	CB2404F0053M	2	4	4	SPARE	t	t	t	0 000 000 053	000.000.000.53	000.000.000.053	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
54	CB2404F0054M	3	1	1	MAIN	t	t	t	0 000 000 054	000.000.000.54	000.000.000.054	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
55	CB2404F0055M	3	1	1	SPARE	t	t	t	0 000 000 055	000.000.000.55	000.000.000.055	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
56	CB2404F0056M	3	1	2	MAIN	t	f	f	0 000 000 056	000.000.000.56	000.000.000.056	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
57	CB2404F0057M	3	1	2	SPARE	t	t	t	0 000 000 057	000.000.000.57	000.000.000.057	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
58	CB2404F0058M	3	1	3	MAIN	t	t	t	0 000 000 058	000.000.000.58	000.000.000.058	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
59	CB2404F0059M	3	1	3	SPARE	t	t	t	0 000 000 059	000.000.000.59	000.000.000.059	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
60	CB2404F0060M	3	1	4	MAIN	t	t	t	0 000 000 060	000.000.000.60	000.000.000.060	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
61	CB2404F0061M	3	1	4	SPARE	t	t	t	0 000 000 061	000.000.000.61	000.000.000.061	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
84	CB2404F0084M	3	4	4	SPARE	t	t	t	0 000 000 084	000.000.000.84	000.000.000.084	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
85	CB2404F0085M	3	3	3	SPARE	f	t	t	0 000 000 085	000.000.000.85	000.000.000.085	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
86	CB2404F0086M	1	3	4	MAIN	t	f	t	0 000 000 086	000.000.000.86	000.000.000.086	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
87	CB2404F0087M	1	3	4	SPARE	t	t	t	0 000 000 087	000.000.000.87	000.000.000.087	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
88	CB2404F0088M	1	4	1	MAIN	t	t	t	0 000 000 088	000.000.000.88	000.000.000.088	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
89	CB2404F0089M	1	4	1	SPARE	f	t	t	0 000 000 089	000.000.000.89	000.000.000.089	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
90	CB2404F0090M	1	4	2	MAIN	t	t	t	0 000 000 090	000.000.000.90	000.000.000.090	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
91	CB2404F0091M	1	4	2	SPARE	t	t	t	0 000 000 091	000.000.000.91	000.000.000.091	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
92	CB2404F0092M	1	4	3	MAIN	t	t	t	0 000 000 092	000.000.000.92	000.000.000.092	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
93	CB2404F0093M	1	4	3	SPARE	t	t	t	0 000 000 093	000.000.000.93	000.000.000.093	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
94	CB2404F0094M	1	4	4	MAIN	t	t	t	0 000 000 094	000.000.000.94	000.000.000.094	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
95	CB2404F0095M	1	4	4	SPARE	t	t	t	0 000 000 095	000.000.000.95	000.000.000.095	2025-06-10 13:54:44.604593+09	2025-06-10 13:54:44.604593+09	2025-06-10 18:11:16.995454+09
96	CB2404F0096M	1	3	2	SPARE	t	t	t	0 000 000 096	000.000.000.96	000.000.000.96	2025-06-10 13:56:41.769701+09	2025-06-10 13:56:41.769701+09	2025-06-10 18:11:16.995454+09
\.


--
-- TOC entry 5073 (class 0 OID 16647)
-- Dependencies: 244
-- Data for Name: pc_driver; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pc_driver (id, "pcId", "driverId", "createdAt", "updatedAt") FROM stdin;
1	1	1	2025-06-10 14:19:35.707744+09	2025-06-10 18:11:29.949448+09
2	2	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
3	3	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
4	4	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
5	5	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
6	6	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
7	7	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
8	8	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
9	9	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
10	10	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
11	11	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
12	12	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
13	13	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
14	14	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
15	15	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
16	16	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
17	17	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
18	18	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
19	19	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
20	20	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
21	21	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
22	22	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
23	23	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
24	24	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
25	25	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
26	26	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
27	27	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
28	28	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
29	29	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
30	30	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
31	31	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
32	32	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
33	33	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
34	34	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
35	35	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
36	36	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
37	37	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
38	38	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
39	39	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
40	40	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
41	41	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
42	42	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
43	43	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
44	44	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
45	45	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
46	46	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
47	47	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
48	48	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
49	49	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
50	50	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
51	51	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
52	52	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
53	53	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
54	54	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
55	55	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
56	56	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
57	57	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
58	58	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
59	59	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
60	60	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
61	61	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
62	62	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
63	63	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
64	64	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
65	65	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
66	66	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
67	67	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
68	68	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
69	69	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
70	70	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
71	71	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
72	72	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
73	73	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
74	74	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
75	75	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
76	76	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
77	77	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
78	78	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
79	79	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
80	80	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
81	81	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
82	82	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
83	83	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
84	84	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
85	85	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
86	86	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
87	87	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
88	88	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
89	89	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
90	90	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
91	91	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
92	92	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
93	93	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
94	94	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
95	95	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
96	96	1	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
97	1	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
98	2	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
99	3	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
100	4	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
101	5	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
102	6	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
103	7	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
104	8	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
105	9	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
106	10	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
107	11	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
108	12	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
109	13	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
110	14	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
111	15	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
112	16	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
113	17	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
114	18	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
115	19	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
116	20	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
117	21	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
118	22	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
119	23	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
120	24	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
121	25	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
122	26	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
123	27	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
124	28	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
125	29	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
126	30	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
127	31	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
128	32	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
129	33	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
130	34	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
131	35	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
132	36	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
133	37	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
134	38	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
135	39	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
136	40	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
137	41	2	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
138	1	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
139	2	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
140	3	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
141	4	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
142	5	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
143	70	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
144	80	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
145	90	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
146	60	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
147	50	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
148	40	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
149	30	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
150	20	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
151	22	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
152	42	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
153	32	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
154	52	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
155	62	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
156	72	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
157	82	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
158	92	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
159	33	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
160	53	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
161	88	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
162	99	3	2025-06-10 14:27:07.11783+09	2025-06-10 18:11:29.949448+09
\.


--
-- TOC entry 5071 (class 0 OID 16626)
-- Dependencies: 242
-- Data for Name: pc_program; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pc_program (id, "pcId", "programId", "createdAt", "updatedAt") FROM stdin;
1	1	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
2	2	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
3	3	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
4	4	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
5	5	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
6	6	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
7	7	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
8	8	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
9	9	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
10	10	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
11	11	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
12	12	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
13	13	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
14	14	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
15	15	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
16	16	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
17	17	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
18	18	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
19	19	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
20	20	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
21	21	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
22	22	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
23	23	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
24	24	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
25	25	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
26	26	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
27	27	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
28	28	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
29	29	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
30	30	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
31	31	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
32	32	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
33	33	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
34	34	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
35	35	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
36	36	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
37	37	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
38	38	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
39	39	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
40	40	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
41	41	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
42	42	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
43	43	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
44	44	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
45	45	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
46	46	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
47	47	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
48	48	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
49	49	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
50	50	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
51	51	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
52	52	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
53	53	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
54	54	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
55	55	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
56	56	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
57	57	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
58	58	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
59	59	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
60	60	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
61	61	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
62	62	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
63	63	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
64	64	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
65	65	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
66	66	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
67	67	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
68	68	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
69	69	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
70	70	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
71	71	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
72	72	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
73	73	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
74	74	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
75	75	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
76	76	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
77	77	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
78	78	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
79	79	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
80	80	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
81	81	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
82	82	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
83	83	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
84	84	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
85	85	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
86	86	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
87	87	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
88	88	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
89	89	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
90	90	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
91	91	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
92	92	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
93	93	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
94	94	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
95	95	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
96	96	1	2025-06-10 14:54:33.711363+09	2025-06-10 18:11:43.460397+09
97	1	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
98	2	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
99	3	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
100	4	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
101	5	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
102	6	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
103	7	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
104	8	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
105	9	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
106	10	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
107	11	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
108	12	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
109	13	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
110	14	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
111	15	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
112	16	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
113	17	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
114	18	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
115	19	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
116	20	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
117	21	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
118	22	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
119	23	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
120	24	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
121	25	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
122	26	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
123	27	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
124	28	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
125	29	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
126	30	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
127	31	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
128	32	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
129	33	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
130	34	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
131	35	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
132	36	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
133	37	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
134	38	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
135	39	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
136	40	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
137	41	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
138	42	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
139	43	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
140	44	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
141	45	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
142	46	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
143	47	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
144	48	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
145	49	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
146	50	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
147	51	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
148	52	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
149	53	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
150	54	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
151	55	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
152	56	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
153	57	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
154	58	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
155	59	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
156	60	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
157	61	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
158	62	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
159	63	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
160	64	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
161	65	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
162	66	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
163	67	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
164	68	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
165	69	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
166	70	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
167	71	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
168	72	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
169	73	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
170	74	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
171	75	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
172	76	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
173	77	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
174	78	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
175	79	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
176	80	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
177	81	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
178	82	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
179	83	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
180	84	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
181	85	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
182	86	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
183	87	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
184	88	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
185	89	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
186	90	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
187	91	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
188	92	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
189	93	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
190	94	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
191	95	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
192	96	2	2025-06-10 14:55:00.464278+09	2025-06-10 18:11:43.460397+09
193	1	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
194	2	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
195	3	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
196	4	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
197	5	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
198	6	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
199	7	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
200	8	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
201	9	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
202	10	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
203	11	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
204	12	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
205	13	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
206	14	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
207	15	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
208	16	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
209	17	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
210	18	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
211	19	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
212	20	5	2025-06-10 14:55:10.498413+09	2025-06-10 18:11:43.460397+09
213	50	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
214	51	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
215	52	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
216	53	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
217	54	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
218	55	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
219	56	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
220	57	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
221	58	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
222	59	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
223	60	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
224	61	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
225	62	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
226	63	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
227	64	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
228	65	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
229	66	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
230	67	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
231	68	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
232	69	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
233	70	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
234	71	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
235	72	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
236	73	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
237	74	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
238	75	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
239	76	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
240	77	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
241	78	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
242	79	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
243	80	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
244	81	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
245	82	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
246	83	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
247	84	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
248	85	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
249	86	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
250	87	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
251	88	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
252	89	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
253	90	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
254	91	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
255	92	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
256	93	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
257	94	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
258	95	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
259	96	7	2025-06-10 14:55:50.81895+09	2025-06-10 18:11:43.460397+09
260	50	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
261	51	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
262	52	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
263	53	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
264	54	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
265	55	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
266	56	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
267	57	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
268	58	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
269	59	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
270	60	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
271	61	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
272	62	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
273	63	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
274	64	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
275	65	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
276	66	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
277	67	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
278	68	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
279	69	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
280	70	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
281	71	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
282	72	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
283	73	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
284	74	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
285	75	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
286	76	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
287	77	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
288	78	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
289	79	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
290	80	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
291	81	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
292	82	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
293	83	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
294	84	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
295	85	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
296	86	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
297	87	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
298	88	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
299	89	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
300	90	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
301	91	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
302	92	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
303	93	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
304	94	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
305	95	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
306	96	4	2025-06-10 14:55:56.121473+09	2025-06-10 18:11:43.460397+09
307	1	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
308	2	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
309	3	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
310	4	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
311	5	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
312	6	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
313	7	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
314	8	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
315	9	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
316	10	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
317	11	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
318	12	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
319	13	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
320	14	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
321	15	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
322	16	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
323	17	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
324	18	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
325	19	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
326	20	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
327	21	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
328	22	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
329	23	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
330	24	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
331	25	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
332	26	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
333	27	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
334	28	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
335	29	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
336	30	3	2025-06-10 14:56:03.53901+09	2025-06-10 18:11:43.460397+09
\.


--
-- TOC entry 5051 (class 0 OID 16422)
-- Dependencies: 222
-- Data for Name: position; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."position" (id, code, name, "createdAt", "updatedAt") FROM stdin;
1	FRONT	FRONT	2025-06-09 20:09:09.14377+09	2025-06-10 18:11:55.182066+09
2	REAR	REAR	2025-06-09 20:09:09.14377+09	2025-06-10 18:11:55.182066+09
3	RIGHT_HAND	RIGHT HAND	2025-06-09 20:09:09.14377+09	2025-06-10 18:11:55.182066+09
4	LEFT_HAND	LEFT HAND	2025-06-09 20:09:09.14377+09	2025-06-10 18:11:55.182066+09
\.


--
-- TOC entry 5049 (class 0 OID 16401)
-- Dependencies: 220
-- Data for Name: process; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.process (id, code, name, "createdAt", "updatedAt") FROM stdin;
1	GLASS_INSPECT	GLASS INSPECT	2025-06-09 19:48:50.252825+09	2025-06-10 18:12:05.051725+09
2	SEALER_INSPECT	SEALER INSPECT	2025-06-09 19:48:50.252825+09	2025-06-10 18:12:05.051725+09
3	PRIMER_INSPECT	PRIMER INSPECT	2025-06-09 19:48:50.252825+09	2025-06-10 18:12:05.051725+09
4	WHEEL_INSPECT	WHEEL INSPECT	2025-06-09 19:48:50.252825+09	2025-06-10 18:12:05.051725+09
\.


--
-- TOC entry 5067 (class 0 OID 16603)
-- Dependencies: 238
-- Data for Name: program; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.program (id, image, name, version, "programUpdatedAt", "createdAt", "updatedAt") FROM stdin;
1	/mockup/primer.svg	Primer Inspection Vision System	0.0.1	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
2	/mockup/primer.svg	Primer Inspection Vision System	1.0.0	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
3	/mockup/primer.svg	Primer Inspection Vision System	1.2.3	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
4	/mockup/omm.svg	OMM	1.0.0	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
5	/mockup/omm.svg	OMM	1.1.0	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
6	/mockup/omm.svg	OMM	1.2.0	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
7	/mockup/omm.svg	OMM	2.0.0	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
8	/mockup/omm.svg	OMM	2.1.0	2025-06-10 14:50:57.405134+09	2025-06-10 14:50:57.405134+09	2025-06-10 18:12:20.97125+09
\.


--
-- TOC entry 5059 (class 0 OID 16534)
-- Dependencies: 230
-- Data for Name: ram_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ram_status (id, "pcId", total, current, average, lowest, highest, unit, "createdAt", "updatedAt") FROM stdin;
289	1	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
290	2	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
291	3	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
292	4	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
293	5	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
294	6	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
295	7	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
296	8	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
297	9	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
298	10	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
299	11	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
300	12	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
301	13	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
302	14	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
303	15	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
304	16	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
305	17	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
306	18	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
307	19	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
308	20	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
309	21	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
310	22	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
311	23	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
312	24	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
313	25	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
314	26	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
315	27	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
316	28	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
317	29	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
318	30	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
319	31	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
320	32	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
321	33	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
322	34	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
323	35	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
324	36	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
325	37	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
326	38	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
327	39	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
328	40	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
329	41	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
330	42	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
331	43	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
332	44	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
333	45	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
334	46	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
335	47	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
336	48	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
337	49	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
338	50	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
339	51	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
340	52	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
341	53	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
342	54	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
343	55	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
344	56	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
345	57	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
346	58	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
347	59	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
348	60	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
349	61	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
350	62	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
351	63	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
352	64	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
353	65	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
354	66	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
355	67	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
356	68	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
357	69	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
358	70	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
359	71	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
360	72	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
361	73	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
362	74	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
363	75	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
364	76	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
365	77	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
366	78	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
367	79	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
368	80	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
369	81	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
370	82	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
371	83	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
372	84	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
373	85	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
374	86	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
375	87	100	30	50	60	40	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
376	88	100	30	50	70	30	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
377	89	100	30	50	80	20	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
378	90	100	30	50	90	10	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
379	91	100	30	50	0	100	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
380	92	100	30	50	10	90	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
381	93	100	30	50	20	80	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
382	94	100	30	50	30	70	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
383	95	100	30	50	40	60	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
384	96	100	30	50	50	50	GB	2025-06-10 15:03:06.624961+09	2025-06-10 18:12:31.801085+09
\.


--
-- TOC entry 5065 (class 0 OID 16562)
-- Dependencies: 236
-- Data for Name: storage_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.storage_status (id, "pcId", name, total, usage, unit, "createdAt", "updatedAt") FROM stdin;
1	1	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
2	2	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
3	3	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
4	4	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
5	5	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
6	6	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
7	7	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
8	8	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
9	9	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
10	10	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
11	11	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
12	12	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
13	13	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
14	14	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
15	15	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
16	16	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
17	17	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
18	18	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
19	19	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
20	20	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
21	21	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
22	22	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
23	23	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
24	24	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
25	25	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
26	26	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
27	27	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
28	28	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
29	29	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
30	30	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
31	31	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
32	32	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
33	33	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
34	34	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
35	35	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
36	36	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
37	37	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
38	38	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
39	39	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
40	40	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
41	41	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
42	42	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
43	43	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
44	44	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
45	45	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
46	46	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
47	47	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
48	48	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
49	49	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
50	50	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
51	51	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
52	52	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
53	53	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
54	54	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
55	55	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
56	56	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
57	57	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
58	58	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
59	59	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
60	60	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
61	61	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
62	62	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
63	63	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
64	64	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
65	65	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
66	66	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
67	67	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
68	68	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
69	69	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
70	70	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
71	71	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
72	72	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
73	73	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
74	74	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
75	75	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
76	76	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
77	77	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
78	78	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
79	79	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
80	80	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
81	81	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
82	82	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
83	83	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
84	84	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
85	85	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
86	86	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
87	87	C	250	60	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
88	88	C	250	70	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
89	89	C	250	80	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
90	90	C	250	90	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
91	91	C	250	0	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
92	92	C	250	10	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
93	93	C	250	20	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
94	94	C	250	30	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
95	95	C	250	40	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
96	96	C	250	50	GB	2025-06-10 15:04:50.033714+09	2025-06-10 18:12:45.253128+09
97	1	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
98	2	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
99	3	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
100	4	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
101	5	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
102	6	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
103	7	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
104	8	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
105	9	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
106	10	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
107	11	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
108	12	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
109	13	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
110	14	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
111	15	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
112	16	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
113	17	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
114	18	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
115	19	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
116	20	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
117	21	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
118	22	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
119	23	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
120	24	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
121	25	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
122	26	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
123	27	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
124	28	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
125	29	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
126	30	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
127	31	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
128	32	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
129	33	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
130	34	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
131	35	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
132	36	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
133	37	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
134	38	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
135	39	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
136	40	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
137	41	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
138	42	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
139	43	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
140	44	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
141	45	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
142	46	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
143	47	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
144	48	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
145	49	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
146	50	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
147	51	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
148	52	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
149	53	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
150	54	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
151	55	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
152	56	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
153	57	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
154	58	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
155	59	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
156	60	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
157	61	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
158	62	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
159	63	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
160	64	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
161	65	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
162	66	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
163	67	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
164	68	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
165	69	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
166	70	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
167	71	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
168	72	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
169	73	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
170	74	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
171	75	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
172	76	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
173	77	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
174	78	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
175	79	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
176	80	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
177	81	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
178	82	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
179	83	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
180	84	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
181	85	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
182	86	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
183	87	D	250	66	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
184	88	D	250	77	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
185	89	D	250	88	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
186	90	D	250	99	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
187	91	D	250	0	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
188	92	D	250	11	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
189	93	D	250	22	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
190	94	D	250	33	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
191	95	D	250	44	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
192	96	D	250	55	GB	2025-06-10 15:05:29.433553+09	2025-06-10 18:12:45.253128+09
\.


--
-- TOC entry 5063 (class 0 OID 16553)
-- Dependencies: 234
-- Data for Name: temp_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.temp_status (id, "pcId", current, average, lowest, highest, unit, "createdAt", "updatedAt") FROM stdin;
1	1	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
2	2	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
3	3	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
4	4	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
5	5	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
6	6	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
7	7	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
8	8	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
9	9	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
10	10	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
11	11	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
12	12	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
13	13	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
14	14	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
15	15	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
16	16	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
17	17	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
18	18	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
19	19	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
20	20	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
21	21	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
22	22	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
23	23	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
24	24	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
25	25	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
26	26	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
27	27	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
28	28	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
29	29	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
30	30	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
31	31	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
32	32	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
33	33	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
34	34	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
35	35	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
36	36	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
37	37	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
38	38	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
39	39	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
40	40	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
41	41	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
42	42	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
43	43	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
44	44	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
45	45	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
46	46	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
47	47	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
48	48	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
49	49	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
50	50	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
51	51	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
52	52	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
53	53	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
54	54	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
55	55	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
56	56	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
57	57	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
58	58	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
59	59	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
60	60	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
61	61	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
62	62	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
63	63	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
64	64	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
65	65	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
66	66	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
67	67	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
68	68	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
69	69	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
70	70	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
71	71	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
72	72	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
73	73	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
74	74	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
75	75	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
76	76	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
77	77	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
78	78	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
79	79	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
80	80	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
81	81	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
82	82	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
83	83	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
84	84	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
85	85	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
86	86	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
87	87	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
88	88	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
89	89	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
90	90	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
91	91	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
92	92	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
93	93	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
94	94	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
95	95	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
96	96	25	30	18	40	°C	2025-06-10 15:07:22.603607+09	2025-06-10 18:12:57.737747+09
\.


--
-- TOC entry 5093 (class 0 OID 0)
-- Dependencies: 225
-- Name: cpu_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cpu_status_id_seq', 100, true);


--
-- TOC entry 5094 (class 0 OID 0)
-- Dependencies: 239
-- Name: driver_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.driver_id_seq', 3, true);


--
-- TOC entry 5095 (class 0 OID 0)
-- Dependencies: 227
-- Name: gpu_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gpu_status_id_seq', 96, true);


--
-- TOC entry 5096 (class 0 OID 0)
-- Dependencies: 217
-- Name: line_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.line_id_seq', 3, true);


--
-- TOC entry 5097 (class 0 OID 0)
-- Dependencies: 231
-- Name: network_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.network_status_id_seq', 105, true);


--
-- TOC entry 5098 (class 0 OID 0)
-- Dependencies: 243
-- Name: pc_driver_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pc_driver_id_seq', 162, true);


--
-- TOC entry 5099 (class 0 OID 0)
-- Dependencies: 223
-- Name: pc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pc_id_seq', 101, true);


--
-- TOC entry 5100 (class 0 OID 0)
-- Dependencies: 241
-- Name: pc_program_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pc_program_id_seq', 336, true);


--
-- TOC entry 5101 (class 0 OID 0)
-- Dependencies: 221
-- Name: position_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.position_id_seq', 4, true);


--
-- TOC entry 5102 (class 0 OID 0)
-- Dependencies: 219
-- Name: process_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.process_id_seq', 4, true);


--
-- TOC entry 5103 (class 0 OID 0)
-- Dependencies: 237
-- Name: program_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.program_id_seq', 8, true);


--
-- TOC entry 5104 (class 0 OID 0)
-- Dependencies: 229
-- Name: ram_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ram_status_id_seq', 384, true);


--
-- TOC entry 5105 (class 0 OID 0)
-- Dependencies: 235
-- Name: storage_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.storage_status_id_seq', 192, true);


--
-- TOC entry 5106 (class 0 OID 0)
-- Dependencies: 233
-- Name: temp_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.temp_status_id_seq', 96, true);


--
-- TOC entry 4870 (class 2606 OID 16523)
-- Name: cpu_status cpu_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpu_status
    ADD CONSTRAINT cpu_status_pkey PRIMARY KEY (id);


--
-- TOC entry 4884 (class 2606 OID 16624)
-- Name: driver driver_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.driver
    ADD CONSTRAINT driver_pkey PRIMARY KEY (id);


--
-- TOC entry 4872 (class 2606 OID 16532)
-- Name: gpu_status gpu_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gpu_status
    ADD CONSTRAINT gpu_status_pkey PRIMARY KEY (id);


--
-- TOC entry 4862 (class 2606 OID 16490)
-- Name: line line_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.line
    ADD CONSTRAINT line_pkey PRIMARY KEY (id);


--
-- TOC entry 4876 (class 2606 OID 16551)
-- Name: network_status network_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.network_status
    ADD CONSTRAINT network_status_pkey PRIMARY KEY (id);


--
-- TOC entry 4888 (class 2606 OID 16653)
-- Name: pc_driver pc_driver_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_driver
    ADD CONSTRAINT pc_driver_pkey PRIMARY KEY (id);


--
-- TOC entry 4868 (class 2606 OID 16571)
-- Name: pc pc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc
    ADD CONSTRAINT pc_pkey PRIMARY KEY (id);


--
-- TOC entry 4886 (class 2606 OID 16634)
-- Name: pc_program pc_program_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_program
    ADD CONSTRAINT pc_program_pkey PRIMARY KEY (id);


--
-- TOC entry 4866 (class 2606 OID 16492)
-- Name: position position_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (id);


--
-- TOC entry 4864 (class 2606 OID 16494)
-- Name: process process_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process
    ADD CONSTRAINT process_pkey PRIMARY KEY (id);


--
-- TOC entry 4882 (class 2606 OID 16612)
-- Name: program program_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.program
    ADD CONSTRAINT program_pkey PRIMARY KEY (id);


--
-- TOC entry 4874 (class 2606 OID 16541)
-- Name: ram_status ram_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_status
    ADD CONSTRAINT ram_status_pkey PRIMARY KEY (id);


--
-- TOC entry 4880 (class 2606 OID 16569)
-- Name: storage_status storage_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.storage_status
    ADD CONSTRAINT storage_status_pkey PRIMARY KEY (id);


--
-- TOC entry 4878 (class 2606 OID 16560)
-- Name: temp_status temp_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.temp_status
    ADD CONSTRAINT temp_status_pkey PRIMARY KEY (id);


--
-- TOC entry 4900 (class 2606 OID 16654)
-- Name: pc_driver fk_driver_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_driver
    ADD CONSTRAINT fk_driver_id FOREIGN KEY ("driverId") REFERENCES public.driver(id);


--
-- TOC entry 4889 (class 2606 OID 16495)
-- Name: pc fk_line_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc
    ADD CONSTRAINT fk_line_id FOREIGN KEY ("lineId") REFERENCES public.line(id) NOT VALID;


--
-- TOC entry 4892 (class 2606 OID 16572)
-- Name: cpu_status fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpu_status
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4893 (class 2606 OID 16577)
-- Name: gpu_status fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gpu_status
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4895 (class 2606 OID 16582)
-- Name: network_status fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.network_status
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4894 (class 2606 OID 16587)
-- Name: ram_status fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_status
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4897 (class 2606 OID 16592)
-- Name: storage_status fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.storage_status
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4896 (class 2606 OID 16597)
-- Name: temp_status fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.temp_status
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4898 (class 2606 OID 16635)
-- Name: pc_program fk_pc_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_program
    ADD CONSTRAINT fk_pc_id FOREIGN KEY ("pcId") REFERENCES public.pc(id) NOT VALID;


--
-- TOC entry 4890 (class 2606 OID 16500)
-- Name: pc fk_position_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc
    ADD CONSTRAINT fk_position_id FOREIGN KEY ("positionId") REFERENCES public."position"(id) NOT VALID;


--
-- TOC entry 4891 (class 2606 OID 16505)
-- Name: pc fk_process_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc
    ADD CONSTRAINT fk_process_id FOREIGN KEY ("processId") REFERENCES public.process(id) NOT VALID;


--
-- TOC entry 4899 (class 2606 OID 16641)
-- Name: pc_program fk_program_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pc_program
    ADD CONSTRAINT fk_program_id FOREIGN KEY ("programId") REFERENCES public.program(id) NOT VALID;


-- Completed on 2025-06-11 15:01:00

--
-- PostgreSQL database dump complete
--

