--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: events; Type: TABLE; Schema: public; Owner: eventonica
--

CREATE TABLE public.events (
    eventname character varying(256) NOT NULL,
    date date NOT NULL,
    category character varying(256) NOT NULL,
    eid integer NOT NULL
);


ALTER TABLE public.events OWNER TO eventonica;

--
-- Name: events_eid_seq; Type: SEQUENCE; Schema: public; Owner: eventonica
--

CREATE SEQUENCE public.events_eid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_eid_seq OWNER TO eventonica;

--
-- Name: events_eid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eventonica
--

ALTER SEQUENCE public.events_eid_seq OWNED BY public.events.eid;


--
-- Name: user_events; Type: TABLE; Schema: public; Owner: eventonica
--

CREATE TABLE public.user_events (
    id character varying(36) NOT NULL,
    uid integer,
    eid integer
);


ALTER TABLE public.user_events OWNER TO eventonica;

--
-- Name: users; Type: TABLE; Schema: public; Owner: eventonica
--

CREATE TABLE public.users (
    fname character varying(256) NOT NULL,
    lname character varying(256) NOT NULL,
    password character varying(256) NOT NULL,
    uid integer NOT NULL
);


ALTER TABLE public.users OWNER TO eventonica;

--
-- Name: users_uid_seq; Type: SEQUENCE; Schema: public; Owner: eventonica
--

CREATE SEQUENCE public.users_uid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_uid_seq OWNER TO eventonica;

--
-- Name: users_uid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eventonica
--

ALTER SEQUENCE public.users_uid_seq OWNED BY public.users.uid;


--
-- Name: events eid; Type: DEFAULT; Schema: public; Owner: eventonica
--

ALTER TABLE ONLY public.events ALTER COLUMN eid SET DEFAULT nextval('public.events_eid_seq'::regclass);


--
-- Name: users uid; Type: DEFAULT; Schema: public; Owner: eventonica
--

ALTER TABLE ONLY public.users ALTER COLUMN uid SET DEFAULT nextval('public.users_uid_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: eventonica
--

COPY public.events (eventname, date, category, eid) FROM stdin;
Orange County Soccer Club vs. Tacoma Defiance	2020-04-04	Soccer	18
Mimosas & Yoga	2020-03-22	Community/Civic	19
Book of Moron	2020-04-04	Theatre	20
Funky Friday - Hip-Hop, Trap, Dancehall	2020-03-13	Hip-Hop/Rap	21
Gods of Rap II	2020-04-23	Hip-Hop/Rap	22
Mexico National Football Team	2020-05-30	Soccer	23
Minnesota Roller Derby	2020-04-25	Roller Hockey	24
NASCAR All-Star Race	2020-05-16	Motorsports/Racing	25
Women who Rock Benefit Concert	2020-05-15	Rock	26
Monty Python and the Holy Grail	2020-06-26	Comedy	27
\.


--
-- Data for Name: user_events; Type: TABLE DATA; Schema: public; Owner: eventonica
--

COPY public.user_events (id, uid, eid) FROM stdin;
6bf1567c-68bc-43f3-87ae-5b220a327bed	6	19
1a2b62ba-14b4-4216-82fc-3c566d9afc89	7	18
cd0866b5-6ae5-46ab-a1ba-37fe55352aee	10	18
5b1e330d-28ae-4a32-ba8b-e75dd4e94df9	6	18
b26b03cf-9a1d-4f12-af21-a5d7198140d2	8	25
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: eventonica
--

COPY public.users (fname, lname, password, uid) FROM stdin;
Faatih	Ali	test	6
Roy	Bannerjee	test	7
Diju	Jacob	test	8
Siju	Mol	test	9
Zara	Maryam	test	10
\.


--
-- Name: events_eid_seq; Type: SEQUENCE SET; Schema: public; Owner: eventonica
--

SELECT pg_catalog.setval('public.events_eid_seq', 27, true);


--
-- Name: users_uid_seq; Type: SEQUENCE SET; Schema: public; Owner: eventonica
--

SELECT pg_catalog.setval('public.users_uid_seq', 10, true);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: eventonica
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (eid);


--
-- Name: user_events user_events_pkey; Type: CONSTRAINT; Schema: public; Owner: eventonica
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: eventonica
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (uid);


--
-- PostgreSQL database dump complete
--

