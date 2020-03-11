CREATE SEQUENCE image_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

create table if not exists image_data (
	image_id bigint NOT NULL PRIMARY KEY DEFAULT nextval('image_id_seq'::regclass),
    type text NOT NULL,
	title text NOT NULL,
	image_url text NOT NULL,
	images jsonb,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone
);

create index if not exists i__btree__image_data_image_id_idx
	on image_data (image_id)
	where (deleted_at IS NULL);

create index if not exists i__btree__image_data_image_id_created_at_idx
	on image_data (image_id, created_at)
	where (deleted_at IS NULL);
