# LUMINA DEPLOYMENT STATUS — Single Source of Truth

> **File ini wajib update setiap ada perubahan deployment.**
> Sync otomatis: jalankan `powershell utilities\scripts\sync-deploy-status.ps1`
> Last sync: 2026-07-02 02.59.39 +07:00

---

## INFRASTRUCTURE OVERVIEW

| **Service** | **Provider** | **Plan** | **Status** | **Cost** |
|---|---|---|---|---|
| Frontend Hosting | Vercel | Free (Hobby) | AKTIF | $0 |
| Backend Hosting | Render | Free Tier | AKTIF | $0 |
| Database | Supabase | Free (500MB) | AKTIF | $0 |
| Redis/Cache | Upstash | Free (10K cmd/day) | AKTIF | $0 |
| CDN/Edge | Cloudflare | Free | AKTIF | $0 |
| Storage (R2) | Cloudflare R2 | Free (10GB) | AKTIF | $0 |
| Analytics | PostHog | Free (1M events) | AKTIF | $0 |
| Git Hosting | GitHub (Org: Devproflow-Lumina) | Free | AKTIF | $0 |
| Git Mirror | GitLab (Group: devproflow-group) | Free | AKTIF | $0 |
| IaC | Terraform | — | AKTIF | $0 |

**Total infra cost: $0/bulan**

---

## VERCEL ACCOUNTS

| **Team** | **Project** | **URL** | **Framework** | **Status** |
|---|---|---|---|---|
| devproflow-lumina | lumina-overmind | https://lumina-overmind.vercel.app | Next.js | DEPLOYED |
| devproflow-lumina | lumina-marktbit | https://marktbit.devproflow.com | Next.js | DEPLOYED |
| devproflow-project | (available) | — | — | AVAILABLE |

---

## SUPABASE PROJECTS

| **Project** | **Ref ID** | **Region** | **Usage** | **Status** |
|---|---|---|---|---|
| DevPro_FlowSys | ntlkmxuajqaoijjrxpqf | ap-southeast-1 | Primary (lumina-core) | AKTIF |
| Overmind+DevFlo | gbwfavnosouvgujqqrie | ap-southeast-1 | Overmind dashboard | AKTIF |
| MusicVerse | fgcwfvmkkieffqfsvniy | ap-southeast-1 | MusicVerse (mv_ schema) | AKTIF |

---

## PROJECT DEPLOYMENT MATRIX

### 1. Lumina Overmind (C2 Dashboard)
- **Path:** `CORE/lumina-overmind/`
- **Frontend:** Vercel → `https://lumina-overmind.vercel.app`
- **Backend:** Render (Python FastAPI)
- **Database:** Supabase `gbwfavnosouvgujqqrie` (schema: public)
- **Redis:** Upstash (REST token aktif)
- **Analytics:** PostHog (project 486884)
- **CDN:** Cloudflare Pages → `https://lumina-overmind.pages.dev`
- **Env file:** `meta/LUMINA_OVERMIND_COMBINE_FREE_TIER.env`
- **Deploy command:** `vercel --prod` (from `CORE/lumina-overmind/`)
- **Status:** DEPLOYED (frontend), PENDING (backend to Render)

### 2. Lumina MarktBit (Crypto + Stocks Signal)
- **Path:** `lumina-products-SALE/lumina-marktbit/`
- **Frontend:** Vercel → `https://marktbit.devproflow.com`
- **Backend:** VPS 2 (46.250.227.52) — `https://api.marktbit.devproflow.com`
- **Database:** Supabase (TBD which project)
- **Redis:** Upstash (shared with Overmind)
- **Analytics:** PostHog (shared with Overmind)
- **Env file:** `lumina-products-SALE/lumina-marktbit/.env.local`
- **Deploy command:** `node apps/web/run-build.js build && vercel --prod`
- **Status:** DEPLOYED (frontend on Vercel, backend on VPS 2)

### 3. Lumina Core (Global SaaS CRM)
- **Path:** `lumina-products-SALE/lumina-core/`
- **Frontend:** Vercel (TBD)
- **Backend:** Render (TBD)
- **Database:** Supabase `ntlkmxuajqaoijjrxpqf` (primary)
- **Env file:** `lumina-products-SALE/lumina-core/.env`
- **Status:** DEVELOPMENT, NOT DEPLOYED

### 4. DevFlo System (Worker/Agent)
- **Path:** `CORE/devflo-system/`
- **Backend:** Render (Python FastAPI)
- **Database:** Supabase `gbwfavnosouvgujqqrie` (shared with Overmind)
- **Env file:** `CORE/devflo-system/.env`
- **Status:** DEVELOPMENT, NOT DEPLOYED

### 5. MusicVerse
- **Path:** (TBD)
- **Database:** Supabase `fgcwfvmkkieffqfsvniy` (schema: `mv_`)
- **Migration:** `00001_initial_schema.sql` PUSHED to remote
- **Status:** DB READY, APP NOT DEPLOYED

---

## CLOUDFLARE RESOURCES

| **Resource** | **Type** | **Status** |
|---|---|---|
| R2 Bucket | Object Storage | AKTIF (lumina-overmind) |
| Pages | Static CDN | AKTIF (lumina-overmind.pages.dev) |
| Workers | Edge Functions | AVAILABLE (not deployed yet) |
| DNS Zones | Domain management | AKTIF |
| Terraform | IaC management | AKTIF |

**API Tokens:**
- `CLOUDFLARE_API_TOKEN` — R2 storage (lumina-overmind)
- `CLOUDFLARE_API_TOKEN_2` — Additional
- `CLOUDFLARE_API_TOKEN_LUMINA` — Full zone access (Terraform managed)

---

## AI PROVIDER CHAIN (7-Tier + 16 Backup)

### Active (Tier 1-7):
| **Tier** | **Provider** | **Model** | **Free Limit** | **Status** |
|---|---|---|---|---|
| T1 | Groq (2 keys) | llama-3.3-70b-versatile | 30 RPM, 1M tok/day | AKTIF |
| T2 | Cerebras | gpt-oss-120b | 30 RPM, 1M tok/day | AKTIF |
| T3 | Google Gemini (10 keys) | gemini-flash-lite | 15 RPM, 250K TPM | AKTIF |
| T4 | GLM/Zhipu | glm-4.7-flash | Unlimited RPD | AKTIF |
| T5 | OpenRouter | nemotron-3-ultra-550b | 20 RPM, 200 RPD | AKTIF |
| T6 | Together AI | Llama-3.3-70B-Turbo | Paid, last resort | STANDBY |
| T7 | OpenAI | gpt-4o-mini | Paid | STANDBY |

### Backup (Tier 8-23): See `Env Backup Global.txt` lines 44-289

---

## ENVIRONMENT FILES MAP

| **File** | **Location** | **Purpose** |
|---|---|---|
| Env Backup Global.txt | Root | ALL API keys (SINGLE SOURCE OF TRUTH) |
| LUMINA_OVERMIND_COMBINE_FREE_TIER.env | `meta/` | Overmind production env template |
| .env.example | Root | Monorepo template |
| .env.local | Per project | Project-specific real values |
| .env.global | Root | Global shared config |

---

## DEPLOYMENT COMMANDS QUICK REFERENCE

### Vercel (Frontend)
```bash
# From project root
vercel --prod
```

### Render (Backend)
```bash
# Render auto-deploys from GitHub push
# Manual: https://dashboard.render.com
```

### Supabase (Database)
```bash
# Push migration
supabase db push --db-url "postgresql://postgres:[PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"
```

### Cloudflare Workers
```bash
wrangler deploy
```

### Docker (Full Stack — Alternative)
```bash
docker-compose up -d
```

---

## DOMAIN MAP

| **Domain** | **Target** | **Status** |
|---|---|---|
| devproflow.com | Main domain | AKTIF |
| api.devproflow.com | Overmind API (VPS 1) | AKTIF |
| lumina.devproflow.com | Overmind dashboard (VPS 1) | AKTIF |
| lumina-overmind.vercel.app | Overmind (Vercel) | AKTIF |
| lumina-overmind.pages.dev | Overmind CDN | AKTIF |
| marktbit.devproflow.com | MarktBit frontend (Vercel) | AKTIF |
| api.marktbit.devproflow.com | MarktBit API (VPS 2) | AKTIF |
| devflo.devproflow.com | DevFlo API (VPS 2) | AKTIF |
| api.musicverse.devproflow.com | MusicVerse API (VPS 2) | AKTIF |
| api.automotive.devproflow.com | Automotive API (VPS 2) | AKTIF |
| api.livespeak.devproflow.com | LiveSpeak API (VPS 2) | AKTIF |

---

## DEPLOYMENT CHECKLIST (Per Project)

### Pre-Deploy
- [ ] Code passes lint (`pnpm lint`)
- [ ] Tests pass (`pnpm test`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Env vars set in hosting provider dashboard
- [ ] Database migration pushed
- [ ] No real API keys in git

### Post-Deploy
- [ ] Health check passes (`curl https://[URL]/health`)
- [ ] SSL active (check browser)
- [ ] DNS propagated (check `nslookup`)
- [ ] PostHog receiving events
- [ ] No errors in hosting provider logs
- [ ] Update this file with new deployment info

---

## UPDATE PROTOCOL

**File ini adalah SINGLE SOURCE OF TRUTH untuk deployment status.**

### Cara Update:
1. Edit file ini di root project: `DEPLOY_STATUS.md`
2. Jalankan sync: `powershell utilities\scripts\sync-deploy-status.ps1`
3. File akan ter-copy ke semua project folder

### Kapan Update:
- Setelah deploy baru
- Setelah perubahan infra (add/remove service)
- Setelah perubahan domain/DNS
- Setelah perubahan API keys
- Setelah perubahan database migration

### Auto-Sync:
Script `sync-deploy-status.ps1` akan copy file ini ke:
- `CORE/lumina-overmind/`
- `CORE/devflo-system/`
- `lumina-products-SALE/lumina-marktbit/`
- `lumina-products-SALE/lumina-core/`
- `devproflow-landing/`

---

## SECURITY NOTES

- **NEVER** commit real `.env` files to git
- **NEVER** put real API keys in this file
- **ALWAYS** reference `Env Backup Global.txt` for real values
- **ALWAYS** use different keys for production vs development
- **ROTATE** secrets regularly (every 90 days)
