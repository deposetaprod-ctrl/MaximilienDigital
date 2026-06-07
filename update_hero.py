import re

with open("/Users/maximilien/Documents/Maximilien DIGITAL/src/components/sections/HeroDynamicForm.tsx", "r") as f:
    content = f.read()

# 1. Imports
content = content.replace(
    'import { ChevronDown, ArrowLeft, CheckCircle2, Gift } from "lucide-react";',
    'import { ChevronDown, ArrowLeft, CheckCircle2, Gift, UploadCloud } from "lucide-react";'
)

# 2. FormData and State
new_state = """type FormData = {
  flow: "upload" | "guided" | "";
  appType: string;
  target: string;
  sector: string;
  customSector: string;
  description: string;
  dataLink: string;
  fileUrl: string;
  email: string;
  phone: string;
};

const TOTAL_STEPS = 6;

export function HeroDynamicForm({ onScrollDown }: HeroDynamicFormProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({
    flow: "",
    appType: "",
    target: "",
    sector: "",
    customSector: "",
    description: "",
    dataLink: "",
    fileUrl: "",
    email: "",
    phone: "",
  });"""

content = re.sub(
    r"type FormData = \{.*?\n  \}\);", 
    new_state, 
    content, 
    flags=re.DOTALL
)

# 3. API payload
old_payload = """        body: JSON.stringify({
          need: `${data.appType} - ${data.target}`,
          sector: data.sector,
          description: data.description,
          dataLink: data.dataLink,
          email: data.email,
          phone: data.phone,
        }),"""

new_payload = """        body: JSON.stringify({
          need: data.flow === "upload" ? "Upload de CDC" : `${data.appType} - ${data.target}`,
          sector: data.sector === t("hero_form_step3_opt6") ? data.customSector : data.sector,
          description: data.description || "Voir fichier",
          dataLink: data.fileUrl || data.dataLink,
          email: data.email,
          phone: data.phone,
        }),"""

content = content.replace(old_payload, new_payload)

# 4. Progress bar
content = content.replace(
    'style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}',
    'style={{ width: `${Math.max(5, (step / TOTAL_STEPS) * 100)}%` }}'
)

# 5. JSX Steps
old_steps_regex = r"\{/\* Step 1: App type \*/\}.*?\{/\* Step 6: Contact info \*/\}"
new_steps = """{/* Step 0: Branch */}
                {step === 0 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_branch_q")}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <button
                        onClick={() => { updateField("flow", "upload"); setStep(1); }}
                        className={`${optionBtnClass} h-24 flex-col gap-2`}
                      >
                        <UploadCloud className="h-6 w-6 text-primary" />
                        <span>{t("hero_form_branch_opt_upload")}</span>
                      </button>
                      <button
                        onClick={() => { updateField("flow", "guided"); setStep(1); }}
                        className={`${optionBtnClass} h-24 flex-col gap-2`}
                      >
                        <span>{t("hero_form_branch_opt_guide")}</span>
                      </button>
                    </div>
                  </>
                )}

                {/* Upload flow */}
                {step === 1 && data.flow === "upload" && (
                  <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                      {t("hero_form_upload_q")}
                    </h2>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {t("hero_form_upload_sub")}
                    </p>

                    {/* NDA Section */}
                    <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex flex-col gap-3 mb-2">
                      <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-2">
                        {t("hero_form_nda_btn")}
                      </p>
                      <p className="text-xs text-muted-foreground text-center">
                        {t("hero_form_nda_desc")}
                      </p>
                      <button
                        type="button"
                        onClick={async () => {
                          const projectName = window.prompt(t("hero_form_nda_ph"));
                          if (projectName) {
                            const { generateNda } = await import("@/lib/generateNda");
                            generateNda(projectName);
                          }
                        }}
                        className="text-xs font-medium px-3 py-2 bg-background border border-border rounded-lg shadow-sm hover:bg-muted transition-colors mx-auto"
                      >
                        {t("hero_form_nda_generate")}
                      </button>
                    </div>

                    <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center relative transition-colors ${data.fileUrl ? 'border-green-500 bg-green-500/5' : 'border-border hover:border-primary/50'}`}>
                      <UploadCloud className={`h-8 w-8 mb-2 ${data.fileUrl ? 'text-green-500' : 'text-muted-foreground'}`} />
                      <p className="text-sm font-medium mb-1">
                        {isSubmitting ? "Upload en cours..." : (data.fileUrl ? "Fichier uploadé avec succès !" : t("hero_form_upload_btn"))}
                      </p>
                      <input 
                        type="file" 
                        disabled={isSubmitting || !!data.fileUrl}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          
                          if (file.size > 100 * 1024 * 1024) {
                            alert("Le fichier est trop volumineux (Max 100Mo).");
                            return;
                          }
                          
                          setIsSubmitting(true);
                          try {
                            const { supabase } = await import("@/lib/supabase");
                            const fileExt = file.name.split('.').pop();
                            const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
                            
                            const { error: uploadError } = await supabase.storage.from("project_files").upload(fileName, file);
                            
                            if (uploadError) throw uploadError;
                            
                            const { data: { publicUrl } } = supabase.storage.from("project_files").getPublicUrl(fileName);
                            updateField("fileUrl", publicUrl);
                          } catch (err) {
                            console.error("Upload error:", err);
                            alert("Erreur lors de l'upload. Vérifiez que le bucket Supabase 'project_files' existe et est public.");
                          } finally {
                            setIsSubmitting(false);
                          }
                        }}
                      />
                    </div>
                    
                    <button
                      onClick={() => setStep(6)}
                      disabled={!data.fileUrl || isSubmitting}
                      className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                    >
                      Continuer
                    </button>
                  </div>
                )}

                {/* Step 1: App type */}
                {step === 1 && data.flow === "guided" && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step1_q")}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        t("hero_form_step1_opt1"),
                        t("hero_form_step1_opt2"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => selectOption("appType", item)}
                          className={`${optionBtnClass} h-24`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 2: Target */}
                {step === 2 && data.flow === "guided" && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step2_q")}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        t("hero_form_step2_opt1"),
                        t("hero_form_step2_opt2"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => selectOption("target", item)}
                          className={`${optionBtnClass} h-24`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 3: Sector */}
                {step === 3 && data.flow === "guided" && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step3_q")}
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2 max-w-md mx-auto">
                      {[
                        t("hero_form_step3_opt1"),
                        t("hero_form_step3_opt2"),
                        t("hero_form_step3_opt3"),
                        t("hero_form_step3_opt4"),
                        t("hero_form_step3_opt5"),
                        t("hero_form_step3_opt6"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            updateField("sector", item);
                            if (item !== t("hero_form_step3_opt6")) {
                              setTimeout(() => setStep((s) => s + 1), 300);
                            }
                          }}
                          className={`${optionBtnClass} h-16 text-sm ${data.sector === item ? 'border-primary bg-primary/5' : ''}`}
                        >
                          {item}
                        </button>
                      ))}
                      
                      {data.sector === t("hero_form_step3_opt6") && (
                        <div className="col-span-1 sm:col-span-2 mt-2 flex gap-2">
                          <input 
                            type="text" 
                            value={data.customSector} 
                            onChange={(e) => updateField("customSector", e.target.value)} 
                            className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none" 
                            placeholder={t("hero_form_step3_custom_ph")} 
                          />
                          <button 
                            onClick={() => setStep(4)} 
                            disabled={!data.customSector.trim()} 
                            className="bg-primary px-4 py-2 rounded-xl font-bold text-primary-foreground disabled:opacity-50"
                          >
                            OK
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Step 4: Project description & NDA */}
                {step === 4 && data.flow === "guided" && (
                  <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                      {t("hero_form_step4_q")}
                    </h2>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {t("hero_form_step4_sub")}
                    </p>
                    <textarea
                      id="description"
                      rows={4}
                      value={data.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder={t("hero_form_step4_ph")}
                    />
                    
                    {/* NDA Section */}
                    <div className="mt-2 p-4 rounded-xl border border-primary/20 bg-primary/5 flex flex-col gap-3">
                      <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-2">
                        {t("hero_form_nda_btn")}
                      </p>
                      <p className="text-xs text-muted-foreground text-center">
                        {t("hero_form_nda_desc")}
                      </p>
                      <button
                        type="button"
                        onClick={async () => {
                          const projectName = window.prompt(t("hero_form_nda_ph"));
                          if (projectName) {
                            const { generateNda } = await import("@/lib/generateNda");
                            generateNda(projectName);
                          }
                        }}
                        className="text-xs font-medium px-3 py-2 bg-background border border-border rounded-lg shadow-sm hover:bg-muted transition-colors mx-auto"
                      >
                        {t("hero_form_nda_generate")}
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        if(data.description.trim()) {
                          fetch("/api/track-funnel", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ step: "step_4", sessionId, action: "Description filled" }),
                          }).catch(console.error);
                          setStep(5);
                        }
                      }}
                      disabled={!data.description.trim()}
                      className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t("hero_form_step4_btn")}
                    </button>
                  </div>
                )}

                {/* Step 5: Data Link */}
                {step === 5 && data.flow === "guided" && (
                  <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                      {t("hero_form_step5_q")}
                    </h2>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {t("hero_form_step5_sub")}
                    </p>
                    <input
                      id="dataLink"
                      type="url"
                      value={data.dataLink}
                      onChange={(e) => updateField("dataLink", e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("hero_form_step5_ph")}
                    />
                    <button
                      onClick={() => {
                        fetch("/api/track-funnel", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ step: "step_5", sessionId, action: "DataLink filled" }),
                        }).catch(console.error);
                        setStep(6);
                      }}
                      className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {t("hero_form_step5_btn")}
                    </button>
                  </div>
                )}

                {/* Step 6: Contact info */}"""

content = re.sub(old_steps_regex, new_steps, content, flags=re.DOTALL)

# 6. Back Button Logic
content = content.replace(
    '{step > 1 && !isSuccess && (',
    '{step > 0 && !isSuccess && ('
)

# Exception for back button from step 6 of upload flow
old_back = """<button
              onClick={() => setStep(s => s - 1)}
              className="absolute left-6 bottom-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >"""

new_back = """<button
              onClick={() => setStep(s => (data.flow === "upload" && s === 6) ? 1 : s - 1)}
              className="absolute left-6 bottom-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >"""
            
content = content.replace(old_back, new_back)

with open("/Users/maximilien/Documents/Maximilien DIGITAL/src/components/sections/HeroDynamicForm.tsx", "w") as f:
    f.write(content)

print("Update complete")
