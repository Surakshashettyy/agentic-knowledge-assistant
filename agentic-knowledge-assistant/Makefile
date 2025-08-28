.PHONY: dev-api

dev-api:
	cd apps/api && uvicorn aka_api.main:app --reload --port 8000

.PHONY: dev-web

dev-web:
	cd apps/web && pnpm dev
